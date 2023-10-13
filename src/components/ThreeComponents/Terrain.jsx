import { useBox, usePlane } from "@react-three/cannon";
import React from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import img from "../../textures/terrain.jpg";
import wall from "../../textures/wall.jpg";
const Terrain = (props) => {
  const [ref, api] = usePlane(() => ({
    position: [0, -2, 0],
    type: "Static",
    rotation: [-Math.PI / 2, 0, 0],
    mass: 1,
  }));
  const texture = useLoader(THREE.TextureLoader, img);
  const wallTexture = useLoader(THREE.TextureLoader, wall);
  return (
    <group>
      <mesh
        ref={ref}
        position={[0, -10, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[22, 18, 20]}
      >
        <boxGeometry args={[0.97, 0.97, 0.01]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh position={[-10.8, 1.5, 0]}>
        <boxGeometry args={[0.5, 7, 18]} />
        <meshBasicMaterial map={wallTexture} />
      </mesh>
      <mesh position={[10.8, 1.5, 0]}>
        <boxGeometry args={[0.5, 7, 18]} />
        <meshBasicMaterial map={wallTexture} />
      </mesh>
      <mesh position={[0, 1.5, -8.5]}>
        <boxGeometry args={[21, 7, 1]} />
        <meshBasicMaterial map={wallTexture} />
      </mesh>
    </group>
  );
};

export default Terrain;
