//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import SectionHeader from "./sectionHeader";
import Poster from "./poster";

const HalfSection = () =>{

    return(
        <Content>
            <SectionHeader/>
            <Poster/>
        </Content>
    )
}

const Content = styled(motion.div)`
width:50% ;
height:100% ;
background:black ;

`

export default HalfSection;