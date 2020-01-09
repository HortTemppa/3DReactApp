import React, { useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as Three from "three";
import { Mesh, ObjectSpaceNormalMap } from "three";

const Ball = ({ size, handlePointerDown }) => {
  console.log(size);
  const ref = useRef();
  const sphere = useRef();

  const { camera } = useThree();
  const { gl } = useThree();
  const { scene } = useThree();

  useFrame(() => ref.current.updateMatrix());
  console.log(scene.children);
  return (
    <mesh ref={ref} onClick={handlePointerDown}>
      <sphereBufferGeometry
        ref={sphere}
        args={[size, 32, 32]}
        attach="geometry"
      />
      <meshBasicMaterial attach="material" color={0xd2452b} />
    </mesh>
  );
};

export default Ball;
