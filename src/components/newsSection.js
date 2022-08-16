//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import HalfSection from "./halfSection";
import ThirdSection from "./thirdSection";

const NewsSection = () =>{

    return(
        <Main>
            <HalfSection/>
            <ThirdSection/>
            <ThirdSection/>
        </Main>
    )
}

const Main = styled(motion.div)`
width:100% ;
height:630px ;
background:#f2f2f2 ;
display:flex ;
`

export default NewsSection;