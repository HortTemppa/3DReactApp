import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import { Canvas, useThree } from "react-three-fiber";
import * as THREE from "three";
import Model from "./components/Model";
import Lights from "./components/Lights";
import Fallback from "./components/Fallback";
import Controls from "./components/Controls";
import Environment from "./components/Environment";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoView from "./components/InfoView";
import Grid from "./components/Grid";
import Ball from "./components/Ball";
import ButtonControls from "./components/ButtonControls.js";
import DControls from "./components/DragControls";

//testComment

function App() {
  const viewport = { useThree };
  const [size, setSize] = useState(1);
  const [shiftDown, setShiftDown] = useState(false);

  const handleBiggerClick = () => {
    setSize(size + 1);
  };

  const handleSmallerClick = () => {
    if (size > 1) {
      setSize(size - 1);
    } else return null;
  };

  const handlePointerDown = () => {
    console.log("clicked");
  };

  const handleKeyDown = e => {
    if (e.keyCode === 16) {
      setShiftDown(true);
    }
  };

  const handleKeyUp = e => {
    if (e.keyCode === 16) {
      setShiftDown(false);
    }
  };

  return (
    <div className="App">
      <div className="Canvas">
        <Canvas
          className="Canvas"
          camera={{
            position: new THREE.Vector3(-20, 20, 20),
            gl2: true,
            far: 10000,
            near: 0.5
          }}
        >
          <Suspense fallback={<Fallback />}>
            <Lights />
            <Grid />
            <Ball size={size} handlePointerDown={handlePointerDown} />
            <DControls shiftDown={shiftDown} />
            <Controls
              shiftDown={shiftDown}
              handleKeyDown={handleKeyDown}
              handleKeyUp={handleKeyUp}
            />
          </Suspense>
        </Canvas>
        <ButtonControls
          handleBiggerClick={handleBiggerClick}
          handleSmallerClick={handleSmallerClick}
        />
      </div>
    </div>
  );
}

export default App;
