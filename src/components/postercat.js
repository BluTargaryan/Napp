//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";


import eye from '../media/eye.png'
import menu from '../media/menu-vert.png'
import placeholder from '../media/placeholder.jpg'

const PosterCat = () =>{

    return(
        <Content>
            <div id="poster-img" style={{ backgroundImage: `url(${placeholder})` }}/>
            <h1 id="details">Reuters</h1>
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Inter', sans-serif;
width:260px ;
height:25px ;
display:flex ;
align-items:center ;


#poster-img{
    width:25px ;
    height:25px ;
    background-position:center;
    background-size:cover ;
    border-radius:50% ;
    margin-left:15px ;
}

#details{
    font-size:22px ;
    font-weight:600 ;
    font-family: 'Playfair Display', serif;
    color:#f2f2f2 ;
    padding:0 ;
    margin-left:15px ;
}


`

export default PosterCat;