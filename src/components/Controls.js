import React, { useRef } from "react";
import { extend, useThree, useRender, Canvas } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

const Controls = ({ handleKeydown, keydown }) => {
  //const camera = useRef();
  const controls = useRef();

  const { camera } = useThree();
  const { gl } = useThree();

  useRender(() => controls.current.update());

  return (
    <group>
      <orbitControls
        ref={controls}
        controls={{
          keys: true
        }}
        args={[camera, gl.domElement]}
      />
    </group>
  );
};

export default Controls;
