import "./App.css";
import styled from "styled-components";
import { motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

import Works from "./Sections/Work";
import Contact from "./Sections/Contact";

const A = styled.a`
  text-decoration-line: none;
  color: black;
  &:visited {
    color: black;
  }
`;

const Body = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  min-width: 80vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
`;
const Title = styled.span`
  font-size: 48px;
  font-weight: bold;
`;
const BgTitle = styled(motion.span)`
  font-size: 68px;
  opacity: 0.9;
  color: #a8a296e1;
  position: absolute;
  left:15px;
`; 
const Description = styled(motion.p)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 14px;
  color: rgba(0,0,0,0.8);
  margin-top: 30px;
`;
const Icons = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  //about me
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0.03,0.21], [-100,20]);
  //work images
  //work description
  return (
    <>
    <Body id="body" initial="hidden" animate="show">
      <Wrapper id="title">
        <Title>Hyunjeong Lee</Title>
        <Description> Front-end Developer & UX/UI Designer </Description>
      </Wrapper>
      <Wrapper id="about me">
        <BgTitle style={{x}}>ABOUT ME</BgTitle>
        <Description style={{position:"absolute", right:10, marginTop:"0px"}}>Front-end developer who cares deeply about user experience. <br/> Serious passion for UI design and new technologies. 
        </Description>
      </Wrapper>
      <Works />
      <Contact />  
    </Body>
    </>
  );
}

export default App;
