import React from "react";
import { PointLight } from "three";

const Lights = () => {
  return (
    <group>
      <ambientLight intensity={0.9}></ambientLight>
      <pointLight intensity={0.4} position={[0, 0, 100]} />
    </group>
  );
};

export default Lights;
