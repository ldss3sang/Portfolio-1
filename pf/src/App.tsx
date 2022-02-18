import './App.css';
import styled from "styled-components";
import { animations, motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';
import { imgAnimation } from './Animation';
import { useScroll } from './Components/useScroll';

const Wrapper = styled.div`
  min-width: 80vw;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: ivory;
  position: relative;
  &:first-child, &:nth-child(2)  {
    height: 10%;
  };
  &:last-child {
    background-color: gray;
    height: 50%;
    display: grid;
    gap: 10px 20px;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3,1fr);
  };
`;

const DetailWrapper = styled.div`
  width: 100%;
  height: 95%;
  background-color: white;
  &:last-child {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    display: flex;
    flex-direction: column;
  }
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
  font-size: 12px;
  margin-top: 20px;
  grid-row: 2;
`;

const Hightlight = styled(motion.div)`
  width: 150px;
  height: 15px;
  background-color: black;
  transform-origin: top left;
`;

const WorkImages = styled.div`
  width: 100%;
  height: 25%;
  position: relative;
`;
const WorkImage = styled(motion.img)` 
  position: absolute;
  box-shadow: 2px 3px 30px rgba(0,0,0,0.1);
  border-radius: 15%;
  background-image: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))  
  ;
  &:first-child {
    width: 250px;
    height: 150px;
    top:-60px;
    right: 140px;
  };
  &:nth-child(2) {
    width: 160px;
    height: 110px;
    top: 20px;
    right: -60px;
  };
  &:nth-child(3) {
    width: 150px;
    height: 90px;
    top: 120px;
    right: 170px;
  };
  &:last-child {
    width: 100px;
    height: 60px;
    top: 180px;
    right: 10px;
  }
`;

function App() {
  //about me
  const { scrollYProgress, scrollY } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0.03,0.21], [-100,20]);
  //work images
  console.log(scrollY)
  const [ element, controls ] = useScroll();
  //work description

  return (
    <>
    <motion.div initial="hidden" animate="show">
      <Wrapper id="title">
        <Title>Hyunjeong Lee</Title>
        <Description> Front-end Developer & UX/UI Designer </Description>
      </Wrapper>
      <Wrapper id="about me">
        <BgTitle style={{x}}>ABOUT ME</BgTitle>
        <Description style={{position:"absolute", right:10}}>Front-end developer who cares deeply about user experience. <br/> Serious passion for UI design and new technologies. 
        </Description>
      </Wrapper>
      <Wrapper id="work">
        <DetailWrapper className="work-description 1"></DetailWrapper>
        <DetailWrapper className="work-description 2"></DetailWrapper>
        <DetailWrapper className="work-description 3"></DetailWrapper>
        <DetailWrapper className="work-images">
          { [1,2,3].map(i => (
            <WorkImages ref={element} >
              { [1,2,3,4].map( i => (
                <WorkImage 
                  variants={imgAnimation} 
                  animate={controls} 
                />
              ))}
            </WorkImages>
          ))}
        </DetailWrapper>
      </Wrapper>
    </motion.div>
    </>
  );
}

export default App;
