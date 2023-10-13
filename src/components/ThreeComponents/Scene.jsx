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
  };
  useEffect(() => {
    if (id > 0 && !isLeft) {
      setState((prev) => ({
        ...prev,
        color: "green",
      }));
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
      camera={{ fov: 17, position: [-12, 15, 50] }}
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
                scale={[2.2, 2.2, 2.2]}
              />
            </group>
            <Light />
            {[1, 2, 3, 4].map((item) => {
              return (
                <group position={[-8, -2, 1]}>
                  <group position={[2.1, 0, 1]}>
                    <Table position={[item * 4.4, 2, 0]} />
                  </group>
                  <group position={[-3.5, -1.5, -4]}></group>
                </group>
              );
            })}
            <Cupboard />
            {[1, 2, 3, 4].map((item) => {
              return <group position={[-8.5, -0.5, 2]}></group>;
            })}

            <Terrain />
          </group>
          <OrbitControls />
          <color args={["#1b1b1b"]} attach="background" />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
