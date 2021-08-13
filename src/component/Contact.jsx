import React from "react";
import styled from "styled-components";


const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AddressItem>
              <Icon src="https://img-premium.flaticon.com/png/512/1865/premium/1865269.png?token=exp=1628898815~hmac=f641be7f51e0f9ebe999321f7a36c4e0" />
              <Text>Alexderplazt xx, Berlin, Deutshland</Text>
            </AddressItem>

            <AddressItem>
              <Icon src="https://img-premium.flaticon.com/png/512/2586/premium/2586488.png?token=exp=1628898770~hmac=fd378ca11e7bd285682e2da21f06ece1" />
              <Text>0049 156-18181800</Text>
            </AddressItem>

            <AddressItem>
              <Icon src="https://img-premium.flaticon.com/png/512/2374/premium/2374449.png?token=exp=1628898792~hmac=7044ecb42df94eafd873b67de6e92dbf" />
              <Text>john@example.com</Text>
            </AddressItem>
          </div>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 90%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  margin-left: 0;
  text-align: center;

  @media only screen and (max-width: 765px) {
    margin: 20px;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 765px) {
    width: 100%;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  /* align-items: center;
  justify-content: center; */

  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 765px) {
    height: 50%;
    margin-right: 0;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 765px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 765px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 765px) {
    padding: 5px;
    margin-top: 20px;
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
  margin-top: 20px;

  @media only screen and (max-width: 765px) {
    padding: 5px;
    font-size: 14px;
  }
`;
const AddressContainer = styled.div`
  padding-top: 140px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-top: 0;

    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  /* width: 100%; */
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 50px;

  @media only screen and (max-width: 765px) {
    margin-bottom: 20px;
  }
`;
const Icon = styled.img`
  width: 40px;
  margin-right: 10px;
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;

  @media only screen and (max-width: 765px) {
    font-size: 14px;
  }
`;
