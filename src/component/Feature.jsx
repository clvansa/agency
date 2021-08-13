import React from "react";
import styled from "styled-components";
import Phone from "../Image/phone.png";
import AnimatedShapes from "./AnimatedShapes";
const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={Phone} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design
          <br />
          <b>Good</b> Business
        </Title>
        <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          repellendus molestias minus velit aperiam ut excepturi ipsum quo
          consequuntur possimus, enim quisquam, ex aliquid repudiandae iusto cum
          pariatur voluptatibus repellat!
        </Desc>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          repellendus molestias minus velit aperiam ut excepturi ipsum quo
          consequuntur possimus.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media only screen and (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 765px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 765px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: -5px;
  left: -50px;

  @media only screen and (max-width: 932px) {
    width: 300px;
  }
`;

const Title = styled.span`
  font-size: 4rem;

  @media only screen and (max-width: 1300px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 765px) {
    font-size: 2.5rem;
  }
`;
const Subtitle = styled.span`
  font-size: 1.5rem;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 170px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
`;
