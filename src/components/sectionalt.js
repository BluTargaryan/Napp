//motion and styled
import styled from "styled-components";

import React, { useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

//Comps
import { FullSection } from "./fullSection";
import SectionHeaderCat from "../components/sectionHeaderCat";
import FourSection from "./FourSection";

let arrowto = "/home"

const SectionAlt = () =>{

    return(
        <Content>
            <SectionHeaderCat 
            link={arrowto}/>
            <FullSection/>
            <FourSection/>
            <FourSection/>
        </Content>
    )
}

const Content = styled(motion.div)`
width:100% ;
height:auto ;
background-color:black ;
`

export default SectionAlt;