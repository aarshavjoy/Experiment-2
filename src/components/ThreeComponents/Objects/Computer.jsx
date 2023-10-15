import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Computer(props) {
  const { nodes, materials } = useGLTF("../../../textures/computer.glb");
  return (
    <group position={[-6.5, 0.5, -2.8]} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 3.1]} scale={0.012}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Base_Base_0.geometry}
            material={materials.Base}
            position={[2.684, -0.125, 67.889]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes.Display_iMac_0.geometry}
            material={materials.iMac}
            position={[2.684, 83.159, 64.775]}
            rotation={[-1.484, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes.Keyboard_Keyboard_0.geometry}
            material={materials.Keyboard}
            position={[22.163, 1.566, -0.477]}
            rotation={[-1.58, 0, 3.139]}
            scale={100}
          />
          <mesh
            geometry={nodes.Mouse001_Mouse_0.geometry}
            material={materials.Mouse}
            position={[-49.729, 1.055, 2.455]}
            rotation={[-Math.PI / 2, 0, 0.023]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../../../textures/computer.glb");
