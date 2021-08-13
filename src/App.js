import './App.css';
import Intro from './component/Intro';
import Navbar from './component/Navbar';
import styled, { css } from "styled-components";
import Feature from './component/Feature';
import Service from './component/Service';
import Price from './component/Price';
import Contact from './component/Contact';
import Footer from './component/Footer';
import useWindowSize from './utils/useWindowsSize';


const App = () => {
  const { width } = useWindowSize();
  const smallScreen = width <= 765 ? true : false

  return (
    <div className="App">
      <Container >
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen &&
          <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  height:100vh; 
  overflow: hidden;
  position: relative;
`

const Shape = css`
    position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color:crimson;
  z-index: -1;
`


const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color:crimson;
`

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color:pink;
`

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color:#f88497;
`
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color:crimson;
`



