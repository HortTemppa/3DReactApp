import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import { Canvas, useThree } from "react-three-fiber";
import * as THREE from "three";
import Engine from "./components/Engine";
import Lights from "./components/Lights";
import Fallback from "./components/Fallback";
import Controls from "./components/Controls";
import Environment from "./components/Environment";
import "./App.css";
import axios from "axios";

//testComment

function App() {
  const viewport = { useThree };

  return (
    <div className="App">
      <Canvas
        camera={{
          position: [0, 0, 500],
          far: 10000
        }}
      >
        <Suspense fallback={<Fallback />}>
          <Controls />
          <Lights viewport={viewport} />
          <Engine viewport={viewport} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
