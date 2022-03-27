import React, { ReducerAction, useEffect, useRef } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { ContactVariants } from "../Variants";
import { useInView } from "react-intersection-observer";

const A = styled.a`
text-decoration-line: none;
color: black;
&:visited {
  color: black;
}
`;
const Wrapper = styled(motion.div)`
    min-width: 80vw;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
    position: relative;
    
`;
const Title = styled.span`
font-size: 48px;
font-weight: bold;
`;
const Description = styled(motion.div)`
display: flex;
flex-direction: column;
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

const Form = styled.form`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 50px 150px;
    gap: 10px;
    line-height: 500%;
    font-size: 10px;
    input, textarea {
        height: 30px;
        border-radius: 10px; 
        box-shadow: 2px 3px 2px rgba(0,0,0,0.1);
    }
    button:hover{
        cursor: pointer;
    }
`;

function Contact () {
    const controls = useAnimation();
    const [ ref, inView ] = useInView({
        threshold: 0,
    });
    useEffect(()=>{
        if (inView) {
            controls.start("show");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    
    const sendEmail = (event :React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        emailjs.sendForm('service_z8queaj', 'template_ghcevwo', event.currentTarget, 'd0RLBbck3vweLITnG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.currentTarget.reset();
    };

    return (
        <motion.div ref={ref}>
        <Wrapper id="contact" variants={ContactVariants} initial="hidden" animate={controls}>
            <Title>Contact</Title>
            <Description> 
            
            <Form onSubmit={sendEmail} style={{position:"relative"}}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Title</label>
                <textarea name="subject" />
                <label>Message</label>
                <textarea name="message" />
                <div></div>
                <button type="submit" value="Send" style={{position:"absolute", right:"-70px", top:"60px", border:"none", backgroundColor:"black", color:"white", fontSize:"10px", borderRadius:"50%", width:"35px", height:"35px", marginTop:"25px"}}>
                 <FontAwesomeIcon icon={faEnvelope}/>  
                </button>  
                
            </Form>
            
            </Description>
            <span> e-mail: hihjlee0505@gmail.com </span>
            
            <Icons style={{paddingTop:"20px"}}>
            <A href="https://github.com/jlee0505?tab=repositories">
                <FontAwesomeIcon icon={faGithub} />
            </A>
            <A href="https://velog.io/@jlee0505/about"> 
                <FontAwesomeIcon icon={faBlog}/>
            </A> 
            <A href="https://www.instagram.com/030__jz/">
                <FontAwesomeIcon icon={faInstagram} />
            </A>
            </Icons>
        </Wrapper>  
        </motion.div> 
    );
};

export default Contact;