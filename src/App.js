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

//testComment

function App() {
  const viewport = { useThree };

  return (
    <div className="App">
      <div className="Canvas">
        <Canvas
          className="Canvas"
          camera={{
            position: new THREE.Vector3(-1000, 1000, 1000),
            gl2: true,
            far: 10000,
            near: 0.5
          }}
        >
          <Controls />
          <Suspense fallback={<Fallback />}>
            <Model viewport={viewport} />
            <Lights />
          </Suspense>
        </Canvas>
        <InfoView />
      </div>
    </div>
  );
}

export default App;
