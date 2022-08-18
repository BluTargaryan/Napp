//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

//Comps
import Section from "../components/section";

import { homePageTransition } from "../components/animation";
const Home = () =>{

    return(
        <Content variants={homePageTransition} initial="hidden" animate="show" exit="exit">
            <Section/>
            <Section/>
        </Content>
    )
}

const Content = styled(motion.div)`
width:100vw ;
height:auto ;
position:absolute ;
    top:50px ;
    
`

export default Home;