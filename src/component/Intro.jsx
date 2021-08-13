import React from "react";
import styled from "styled-components";
import Women from "../Image/women.png";
import AnimatedShapes from "./AnimatedShapes";

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, libero
          neque commodi tempora voluptatibus consequatur repudiandae porro sit
          voluptas? Recusandae sapiente nihil fugit aliquid earum, quam amet
          necessitatibus perspiciatis odio?
        </Description>
        <Info>
          <Button>Start Project </Button>
          <Contact>
            <Phone>Call us +49 000-000-0000</Phone>
            <ContactText>For Any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Women} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 765px) {
    width: 100%;
    height: 100%;
  }
`;
const Right = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  /* align-self: flex-end; */

  @media only screen and (max-width: 765px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  width: 60%;

  
  @media only screen and (max-width: 1300px) {
    font-size: 3.0rem;
  }


  @media only screen and (max-width: 765px) {
    width: 100%;
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 765px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media only screen and (max-width: 1150px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width: 765px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const Image = styled.img`
   width: 80%;
  /* height:100% ;  */
  position: absolute;
  bottom: -105px;
  left: 0;

  @media only screen and (max-width: 1250px) {
    width: 100%;
  }
`;
