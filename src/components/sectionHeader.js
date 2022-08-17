//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import arrow from '../media/Arrow-right-white.png'

const SectionHeader = () =>{

    return(
        <Content>
            <div>
                <span>For you</span>
                <img src={arrow} alt="" />
            </div>
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Playfair Display', serif;
width:100% ;
height:55px ;
color:white ;
position:relative ;
background:black ;

div{
    position:absolute ;
    bottom:0 ;
    right:0 ;
    font-size:20px ;
    font-weight:700 ;
    height:55px ;
    width:100% ;
    border-bottom: 4px solid #f2f2f2 ;
    padding-left:5% ;
    display:flex ;
    align-items:center ;
    justify-content:space-between ;

    img{
        height:35px ;
margin-right:20px ;
cursor: pointer;
&:hover{
    margin-right:18px;
    transition:.1s ease-in ;
}
    }
}
`

export default SectionHeader;