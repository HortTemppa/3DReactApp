import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Grid = () => {
  const ref = useRef();

  return (
    <mesh ref={ref}>
      <gridHelper args={[100, 10]} />
    </mesh>
  );
};

export default Grid;
