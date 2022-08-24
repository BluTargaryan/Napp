//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import placeholder from '../media/placeholder.jpg'

const PosterPost = () =>{

    return(
        <Content>
            <div id="poster-img" style={{ backgroundImage: `url(${placeholder})` }}/>
            <span id="details">Reuters</span>
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Inter', sans-serif;
width:160px ;
height:auto ;
display:flex ;
align-items:center ;
justify-content:space-between ;
align-self:flex-start ;
margin-top:80px ;


#poster-img{
    width:30px ;
    height:30px ;
    background-position:center;
    background-size:cover ;
    border-radius:50% ;
}

#details{
    font-family: 'Playfair Display', serif !important;
    margin:0 !important ;
    display:block ;
    font-size:24px ;
    font-weight:500 ;
    color:#000 ;
}


`

export default PosterPost;