import React from "react";
import styled from "styled-components";

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <RectAngle />
    </>
  );
};

export default AnimatedShapes;

const Square = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: -60px;
  left: -60px;
  background-color: #4e6bff;
  opacity: 0.7;
  z-index: -1;

  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 200px;
  left: -100px;
  border-radius: 50%;
  background-color: #ff97af;
  opacity: 0.7;
  z-index: -1;

  animation: circle 40s 5s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const RectAngle = styled.div`
  position: absolute;
  width: 50px;
  height: 100px;
  top: 400px;
  left: -50px;
  background-color: #669966;
  opacity: 0.5;
  z-index: -1;

  animation: rect 25s 3s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;
