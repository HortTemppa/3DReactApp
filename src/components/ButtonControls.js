import React from "react";
import { Button } from "react-bootstrap";

const ButtonControls = ({ handleBiggerClick, handleSmallerClick }) => {
  return (
    <div>
      <Button onClick={handleBiggerClick}>bigger</Button>
      <Button onClick={handleSmallerClick}>smaller</Button>
    </div>
  );
};

export default ButtonControls;
