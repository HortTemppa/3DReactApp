import React from "react";
import { PointLight } from "three";

const Lights = () => {
  return (
    <group>
      <ambientLight intensity={0.0}></ambientLight>
      <pointLight intensity={0.5} position={[0, 0, 0]} />
    </group>
  );
};

export default Lights;
