//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import SectionHeader from "./sectionHeader";

const ThirdSection = () =>{

    return(
        <Content>
            <SectionHeader/>
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Playfair Display', serif;
width:25% ;
height:100% ;
background:grey ;
`

export default ThirdSection;