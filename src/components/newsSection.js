//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";


import HalfSection from "./halfSection";
import ThirdSection from "./thirdSection";
import ThirdSectionImg from "./thirdSectionImg";
import ThirdSectionBlk from "./thirdSectionBlk";

const NewsSection = () =>{

    return(
        <Main>
            <HalfSection/>
            <ThirdSection/>
            <ThirdSectionImg/>
        </Main>
    )
}

const Main = styled(motion.div)`
width:100% ;
height:580px ;
background:black;
display:flex ;
`

export default NewsSection;