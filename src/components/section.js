//motion and styled
import styled from "styled-components";

import React, { useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

//Comps
import NewsSection from "../components/newsSection";
import SectionHeader from "../components/sectionHeader";



const Section = () =>{

    return(
        <Content>
            <SectionHeader/>
            <NewsSection/>
        </Content>
    )
}

const Content = styled(motion.div)`
width:100% ;
height:auto ;
background-color:black ;
`

export default Section;