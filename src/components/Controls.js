import React, { useRef, useEffect } from "react";
import { extend, useThree, useRender, Canvas } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

const Controls = ({ handleKeyDown, handleKeyUp, shiftDown }) => {
  //const camera = useRef();
  const controls = useRef();

  const { camera } = useThree();
  const { gl } = useThree();

  useRender(() => controls.current.update());

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);

  const orbitControlsEnabled = shiftDown ? false : true;

  console.log(orbitControlsEnabled);

  return (
    <group>
      <orbitControls
        ref={controls}
        enabled={orbitControlsEnabled}
        args={[camera, gl.domElement]}
      />
    </group>
  );
};

export default Controls;
