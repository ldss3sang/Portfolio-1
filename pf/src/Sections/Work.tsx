import styled from "styled-components";
import { AnimatePresence, motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { dbs } from "../Components/Data";
import { imgVariants, highlightVariants, containerVariants } from '../Variants';
import { useEffect } from "react";

const A = styled.a`
  text-decoration-line: none;
  color: black;
  &:visited {
    color: black;
  }
`;

const SupperWrapper = styled(motion.div)`
  width: 600px;
  height: 1700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(motion.div)`
  min-width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
`;

const DetailWrapper = styled(motion.div)`
  width: 45%;
  height: 95%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: -20px;
  margin-left: 20px;
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

const WorkDescription = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  margin-top: 20px;
  p{
    width: 100px;
  }
`;

const Hightlight = styled(motion.div)`
  background-color: black;
  transform-origin: left center;
  height: 15px;
`;

const WorkImages = styled.div`
  width: 100%;
  height: 15%;
  position: relative;
  top: -80px;
`;
const WorkImage = styled(motion.img)` 
  position: absolute;
  border-radius: 15%;
  box-shadow: 3px 4px 20px rgba(0,0,0,0.7);
  background-image: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))  
  ;
  &:first-child {
    width: 300px;
    height: 200px;
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
    width: 120px;
    height: 80px;
    top: 180px;
    right: 10px;
  }
`;
const Text = styled.span`
  font-weight: bold;
  font-size:"60px";
`;

const Works = () => {
    const controls = useAnimation();
    const [ ref, inView ] = useInView({
        threshold:0,
        delay: 0.5,
    });
    useEffect(() => {
        if (inView) {
            controls.start("show");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <AnimatePresence>
        <SupperWrapper id="work" ref={ref} variants={containerVariants} initial="hidden" animate="show" exit="exit">
          {dbs.map(db => (
            <A href={db.address} key={db.id}>
              <Wrapper >
                <DetailWrapper className="work-description">
                  <WorkDescription> 
                    <Hightlight 
                      variants={highlightVariants}
                      initial="hidden"
                      animate={controls}
                      style={{width:10}}>
                      <Text>{db.id}</Text>
                    </Hightlight>
                    <br/>
                    <Hightlight 
                      variants={highlightVariants}
                      initial="hidden"
                      animate={controls} 
                      style={{width:65}}
                    >
                      <Text style={{fontSize:"60px"}}>{db.title}</Text>
                    </Hightlight>
                    <br/>
                    <Hightlight 
                      variants={highlightVariants}
                      initial="hidden"
                      animate={controls} 
                      style={{width:120, height:80 }}>
                      <Description style={{marginTop:0}}>{db.description}</Description>
                    </Hightlight>
                    <br/>
                    <Hightlight 
                      variants={highlightVariants}
                      initial="hidden"
                      animate={controls} 
                      style={{width:55}}
                  >
                      <Text>{db.kind}</Text>
                    </Hightlight>
                    <br/>
                  </WorkDescription>
                </DetailWrapper>
                <DetailWrapper className="work-images">
                  <WorkImages >
                    { db.images?.map(i => (
                      <WorkImage
                        key={i}
                        src={i}
                        variants={imgVariants}
                        initial="hidden"
                        animate={controls}
                      />
                    ))}
                  </WorkImages>
                </DetailWrapper>
              </Wrapper>
            </A>
          ))}
        </SupperWrapper>
      </AnimatePresence> 
    )
}

export default Works;