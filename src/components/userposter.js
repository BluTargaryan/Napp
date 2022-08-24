//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import placeholder from '../media/placeholder.jpg'

const UserPoster = () =>{

    return(
        <Content>
            <div id="poster-img" style={{ backgroundImage: `url(${placeholder})` }}/>
            <span id="details">Reuters</span>
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Inter', sans-serif;
width:120px ;
height:auto ;
display:flex ;
align-items:center ;
justify-content:space-between ;
align-self:flex-start ;


#poster-img{
    width:25px ;
    height:25px ;
    background-position:center;
    background-size:cover ;
    border-radius:50% ;
}

#details{
    font-family: 'Playfair Display', serif !important;
    margin:0 !important ;
    display:block ;
    font-size:20px ;
    font-weight:600 ;
    color:#000 ;
}


`

export default UserPoster;