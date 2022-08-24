//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import arrow from '../media/Arrow-left.png'
import { Link } from "react-router-dom";

const SectionHeader = ({link}) =>{

    return(
        <Content>
            <div>
            <Link to={link}>
                <img src={arrow} alt="" />
                </Link>
                <span><p>For you</p></span>
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
    display:flex ;
    align-items:center ;
    justify-content:space-between ;
    height:55px ;
    width:100% ;
    
span{
width: 90%;
height:100% ;
border-bottom: 4px solid #f2f2f2 ;
    font-size:20px ;
    font-weight:700 ;
    display:flex ;
    align-items:center ;
}
}

  img{
    padding-left:20px ;
    height: 40px;
    &:hover{
    padding-left:16px;
    transition:.1s ease-in ;
}
}

`

export default SectionHeader;