import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import engine from "./2CylinderEngine.gltf";

const Engine = ({}) => {
  const model = useLoader(GLTFLoader, "./gltf/2CylinderEngine.gltf");

  console.log(model.scene);

  return <primitive object={model.scene} position={[0, 0, 0]}></primitive>;
};

export default Engine;
