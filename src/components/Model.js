import React, { useRef } from "react";
import { useLoader, useRender, useThree } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Model = ({ viewport, handleCameraPosition }) => {
  const model = useLoader(GLTFLoader, "./gltf/newHouse/scene.gltf");

  console.log(model.scene);

  const { camera } = useThree();

  const ref = useRef();

  return <primitive visible ref={ref} object={model.scene}></primitive>;
};

export default Model;
