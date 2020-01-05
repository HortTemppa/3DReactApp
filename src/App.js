import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import { Canvas } from "react-three-fiber";
import Engine from "./components/Engine";
import Lights from "./components/Lights";
import Fallback from "./components/Fallback";
import Environment from "./components/Environment";
import "./App.css";
import axios from "axios"; 

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={<Fallback />}>
          <Lights />
          <Environment />
          <Engine />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
