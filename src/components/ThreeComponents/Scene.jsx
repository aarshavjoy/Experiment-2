import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import { useLoader, Canvas } from "react-three-fiber";
import img from "../../textures/box.jpg";
import RoundBox from "../ThreeComponents/Objects/RoundBox";
import { OrbitControls } from "@react-three/drei";
import Character from "./Objects/Character";
import Terrain from "./Terrain";

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
      }, 3200);

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
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <Canvas
      style={{
        background: "#212529",
        height: "81vh",
        marginTop: 19,
        width: "100%",
      }}
      camera={{ fov: 15, position: [-10, 15, 50] }}
    >
      <Suspense fallback={null}>
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
                scale={[2, 2, 2]}
              />
            </group>
            {[1, 2, 3, 4].map((item) => {
              return (
                <group position={[-8, 0, -5]}>
                  <mesh position={[item * 3.5, -0.5, 0]}>
                    <boxGeometry args={[2, 3, 2]} />
                    <meshBasicMaterial map={texture} color={"blue"} />
                  </mesh>
                </group>
              );
            })}

            {[1, 2, 3, 4].map((item) => {
              return (
                <group position={[-8.5, -0.5, 2]}>
                  <RoundBox
                    spotlightColor={color}
                    key={item}
                    position={[item * 3.7, 2, 0]}
                  />
                </group>
              );
            })}
            <Terrain />
          </group>
          <OrbitControls />
          <color args={["black"]} attach="background" />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
