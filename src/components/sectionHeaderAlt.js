//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

const SectionHeaderAlt = () =>{

    return(
        <Content>
            <div>For you</div>
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Playfair Display', serif;
width:100% ;
height:55px ;
color:black ;
position:relative ;


div{
    position:absolute ;
    bottom:0 ;
    right:0 ;
    font-size:20px ;
    font-weight:700 ;
    height:40px ;
    width:90% ;
    border-bottom: 4px solid black ;
}
`

export default SectionHeaderAlt;