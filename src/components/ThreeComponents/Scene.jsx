import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import { useLoader, Canvas } from "react-three-fiber";
import woodTexture from "../../textures/wood.jpg";
import RoundBox from "../ThreeComponents/Objects/RoundBox";
import { Html, OrbitControls, Text3D } from "@react-three/drei";
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
import Flower from "./Objects/Flower_in_a_pot";

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

  useEffect(() => {
    if (id > 0 && !isLeft) {
      setState((prev) => ({
        ...prev,
        color: "green",
      }));

      dispatch(updateUserInteract(true));
    }
  }, [id, isLeft]);
  const wood = useLoader(THREE.TextureLoader, woodTexture);
  return (
    <Canvas
      style={{
        background: "#022027",
        height: "81vh",
        marginTop: 19,
        width: "100%",
      }}
      camera={{ fov: 18, position: [-30, 6, 50] }}
    >
      {/* <Suspense fallback={<Loading />}> */}
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
            <Flower position={[-10, -2, -7]} />
            {objectData.map((item, index) => {
              return (
                <group position={[-8, -2, 1]}>
                  <group position={[2.1, 0, 1]}>
                    <Table
                      position={item.tablePosition}
                      isSelected={selectedCardIndex.includes(index)}
                    />
                    {item.Board.map((board, index) => {
                      return (
                        <group>
                          <mesh position={board.position}>
                            <boxGeometry args={[3, 1, 0]} />
                            <meshBasicMaterial />
                          </mesh>
                        </group>
                      );
                    })}
                  </group>
                </group>
              );
            })}
            <Cupboard />

            {[1, 2, 3, 4].map((item) => {
              return <group position={[-8.5, -0.5, 2]}></group>;
            })}
            <Light />
            <Terrain />
          </group>
          <OrbitControls />
          <color args={["#022027"]} attach="background" />
        </Physics>
      {/* </Suspense> */}
    </Canvas>
  );
};

export default Scene;
