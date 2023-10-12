import { useBox, usePlane } from "@react-three/cannon";
import React from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import img from "../../textures/terrain.jpg";
const Terrain = (props) => {
  const [ref, api] = usePlane(() => ({
    position: [0, -2, 0],
    type: "Static",
    rotation: [-Math.PI / 2, 0, 0],
    mass: 1,
  }));
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <mesh
      ref={ref}
      position={[0, -10, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[22, 18, 20]}
    >
      <planeGeometry />
      <meshBasicMaterial map={texture} color="green" />
    </mesh>
  );
};

export default Terrain;
