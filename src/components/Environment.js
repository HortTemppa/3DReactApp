import React from "react";
import { BackSide } from "three";

const Environment = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[500, 2000, 2000]} attach="geometry" />
      <meshStandardMaterial
        color={0xd2452b}
        attach="material"
        side={BackSide}
        metalness={0.4}
      />
    </mesh>
  );
};

export default Environment;
