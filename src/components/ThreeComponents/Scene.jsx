import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import { useLoader, Canvas } from "react-three-fiber";
import woodTexture from "../../textures/wood.jpg";
import RoundBox from "../ThreeComponents/Objects/RoundBox";
import { OrbitControls } from "@react-three/drei";
import Character from "./Objects/Character";
import Terrain from "./Terrain";
import Loading from "../Loading";
import Table from "./Objects/Table";
import Cupboard from "./cupboard";
import Light from "./Objects/Light";
import Door from "./Objects/Door";
import Computer from "./Objects/Computer";
import {
  updateSelectedCardIndex,
  updateUserInteract,
} from "../../redux/slices/BlockChainReducer";
import { useDispatch, useSelector } from "react-redux";
import TableLamp from "./Objects/Table_lamp";
import { objectData } from "../../data/objectData";

const intialState = () => {
  return {
    isLeft: false,
    id: 0,
    color: "red",
  };
};

const Scene = () => {
  const [state, setState] = useState(intialState());
  const { id, isLeft, color } = state;
  console.log(state.id);
  const dispatch = useDispatch();
  const { selectedCardIndex, userIntract } = useSelector(
    (state) => state.BlockChainReducer
  );
  React.useEffect(() => {
    if (isLeft) {
      const walk = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isLeft: false,
          id: 1,
        }));
      }, 3400);

      return () => {
        clearTimeout(walk);
      };
    }
  }, [isLeft]);
  const onHandleClick = (type) => {
    if (!userIntract) {
      switch (type) {
        case "left":
          setState((prev) => ({
            ...prev,
            isLeft: !state.isLeft,
          }));
          break;

        default:
          break;
      }
    } else {
      alert("Complete the task ");
    }
  };
  console.log(selectedCardIndex);
  useEffect(() => {
    const nextIndex =
      selectedCardIndex.length > 0
        ? (selectedCardIndex[selectedCardIndex.length - 1] + 1) % 4
        : 0;

    if (id > 0 && !isLeft) {
      setState((prev) => ({
        ...prev,
        color: "green",
      }));
      dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
      dispatch(updateUserInteract(true));
    }
  }, [id, isLeft]);
  const wood = useLoader(THREE.TextureLoader, woodTexture);
  return (
    <Canvas
      style={{
        background: "#1b1b1b",
        height: "81vh",
        marginTop: 19,
        width: "100%",
      }}
      camera={{ fov: 17, position: [-18, 15, 50] }}
    >
      <Suspense fallback={<Loading />}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          <group position={[-1, 0, 0]}>
            <group
              onClick={() => onHandleClick("left")}
              position={[0, 0.05, 0]}
            >
              <Character
                isLeft={state.isLeft}
                state={state}
                scale={[3, 3, 3]}
              />
            </group>
            <Door />

            {objectData.map((item, index) => {
              return (
                <group position={[-8, -2, 1]}>
                  <group position={[2.1, 0, 1]}>
                    <Table
                      position={item.tablePosition}
                      isSelected={selectedCardIndex.includes(index)}
                    />
                  </group>
                </group>
              );
            })}
            <Cupboard />

            <Computer />
            {[1, 2, 3, 4].map((item) => {
              return <group position={[-8.5, -0.5, 2]}></group>;
            })}

            <Terrain />
          </group>
          <OrbitControls />
          <color args={["#1b1b1b"]} attach="background" />
          {/* <OrbitControls /> */}
          <color args={["black"]} attach="background" />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
