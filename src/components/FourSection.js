//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";



import ThirdSectionBlk from "./thirdSectionBlk";
import ThirdSection from "./thirdSection";

const FourSection = () =>{

    return(
        <Main>
            <ThirdSectionBlk/>
            <ThirdSection/>
            <ThirdSectionBlk/>
            <ThirdSection/>
        </Main>
    )
}

const Main = styled(motion.div)`
width:100% ;
height:580px ;
background:black;
display:flex ;
`

export default FourSection;