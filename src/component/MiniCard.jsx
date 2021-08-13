import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const MiniCard = () => {
  return (
    <Container>
      {/* <Image /> */}
      <SearchIcon style={{ color: "#f88497" }} />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </Container>
  );
};

export default MiniCard;

const Container = styled.div`
  width: 110px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);

  @media only screen and (max-width: 765px) {
    width: 80px;
  }
`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;

  @media only screen and (max-width: 765px) {
    font-size: 14px;
  }
`;
