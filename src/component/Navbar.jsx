import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListIcon from "@material-ui/icons/List";
import useWindowSize from "../utils/useWindowsSize";
import { IconButton } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import WhatsApp from "@material-ui/icons/WhatsApp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (width > 765) {
        setShow(true);
        console.log(width, height);
      } else {
        setShow(false);
      }
    }

    return () => (mounted = false);
  }, [width]);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        {show ? (
          <Button>Join Today</Button>
        ) : (
          <IconButton
            onClick={() => setOpen(!open)}
            style={{ zIndex: open ? 0 : 3 }}
          >
            <ListIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>
        )}
        {!show && (
          <ResponsiveMenu open={open}>
            <Top open={open}>
              <IconButton onClick={() => setOpen(!open)}>
                <ListIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </Top>

            <Center open={open}>
              <MenuSmall>
                <MenuItemSmall>Home</MenuItemSmall>
                <MenuItemSmall>Features</MenuItemSmall>
                <MenuItemSmall>Services</MenuItemSmall>
                <MenuItemSmall>Pricing</MenuItemSmall>
                <MenuItemSmall>Contact</MenuItemSmall>
              </MenuSmall>
            </Center>
            <Center open={open}>
              <Button>Join Today</Button>
            </Center>
            <Bottom open={open}>
              <Facebook
                fontSize="large"
                style={{ color: "#1877F2", padding: "10px" }}
              />
              <Instagram
                fontSize="large"
                style={{ color: "#E4405F", padding: "10px" }}
              />
              <WhatsApp
                fontSize="large"
                style={{ color: "#25D366", padding: "10px" }}
              />
            </Bottom>
          </ResponsiveMenu>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    width: 80%;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  @media only screen and (max-width: 765px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;

  @media only screen and (max-width: 1200px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  z-index: 1;
`;

const ResponsiveMenu = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.5s;
  flex-direction: column;
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
  width: ${(props) => (props.open ? "50%" : "80px")};
  background-color: ${(props) => (props.open ? "crimson" : "transparent")};

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Top = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
`;

const Center = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: center;

  display: ${(props) => (props.open ? "flex" : "none")};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  display: ${(props) => (props.open ? "flex" : "none")};
  border: 5px solid crimson;
  margin-bottom: 20px;

  &:nth-child(1) {
    cursor: pointer !important;
    background-color: red !important;
  }
`;

const MenuSmall = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
const MenuItemSmall = styled.li`
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
