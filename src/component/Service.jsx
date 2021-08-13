import React, { useState } from "react";
import styled from "styled-components";
import Tablet from "../Image/tablet.png";
import MiniCard from "./MiniCard";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import useWindowSize from "../utils/useWindowsSize"

const Service = () => {
  const [open, setOpen] = useState(false);
  const {width, height} = useWindowSize();
  const smallScreen = width<= 765 ? true : false;

  return (
    <Container>
      <Left>
        <Image src={Tablet} open={open} />
        <Video
          src="https://player.vimeo.com/video/169513535?h=4706f24110"
          autoPlay
          loop
          controls
          open={open}
        ></Video>
      </Left>
      <Right>
        <Wrapper>
          <Title>Lorem, ipsum dolor.</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            nulla ex nam magnam, laboriosam fugiat delectus dolore vitae tempore
            ullam dignissimos quos exercitationem molestias necessitatibus
            molestiae asperiores, unde quo odio!
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            src="https://player.vimeo.com/video/169513535?h=4706f24110"
            autoPlay
            loop
            controls
            open={open}
          ></Video>
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 765px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 765px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 765px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Image = styled.img`
   width: 60%;
  /* height: 75%;  */
  margin-left: 100px;
  display: ${(props) => props.open && "none"};
  position: absolute;
  bottom: 0px;
  left: 0px;

  @media only screen and (max-width: 1250px) {
    width: 80%;
  }
`;

const Button = styled.button`
  width: 220px;
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const Icon = styled(PlayCircleOutlineIcon)`
  margin-right: 10px;
  font-size: 30px !important;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  position: absolute;

  @media only screen and (max-width: 765px) {
    width: 100%;
  }
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 25%;
  border: none;
  background-color: white;
  color: crimson;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
`;
