import React from "react";

import { RotatingLines } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/RotatingLines"

const ReactSpinner = () => {
  return (
    <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
  );
};

export default ReactSpinner;
