import React from "react";

import Nav from '../components/nav';
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { homePageTransition } from "../components/animation";
import SectionAlt from "../components/sectionalt";

export const Category = () =>{

    return(
        <>
        <Nav/>
        <Content variants={homePageTransition} initial="hidden" animate="show" exit="exit">
  <SectionAlt/>
        </Content>
        </>
    )
}


const Content = styled(motion.div)`
width:100vw ;
height:auto ;
position:absolute ;
    top:50px ;
    
`