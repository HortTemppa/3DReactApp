import React, { useRef } from "react";
import { useLoader, useRender } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Engine = ({ viewport }) => {
  const model = useLoader(GLTFLoader, "./gltf/2CylinderEngine.gltf");

  console.log(model.scene);

  const ref = useRef();

  return (
    <primitive ref={ref} object={model.scene} position={[0, 0, 0]}></primitive>
  );
};

export default Engine;
