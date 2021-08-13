import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";
import Tilt from "react-parallax-tilt";

const Price = () => {
  return (
    <Container>
      <Tilt>
        <PriceCard price="10" type="Basic" />
      </Tilt>
      <Tilt>
        <PriceCard price="20" type="Premium" />
      </Tilt>
      <Tilt>
        <PriceCard price="30" type="Advanced" />
      </Tilt>
    </Container>
  );
};

export default Price;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
