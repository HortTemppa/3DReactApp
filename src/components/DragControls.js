import React from "react";
import { extend, useThree } from "react-three-fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";
extend({ DragControls });

const DControls = ({ shiftDown }) => {
  const { scene } = useThree();
  const { gl } = useThree();
  const { camera } = useThree();

  const dragControlsEnabled = shiftDown ? true : false;

  return (
    <dragControls
      enabled={dragControlsEnabled}
      args={[scene.children, camera, gl.domElement]}
    />
  );
};

export default DControls;
