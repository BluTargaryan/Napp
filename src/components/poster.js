//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";


import eye from '../media/eye.png'
import menu from '../media/menu-vert.png'
import placeholder from '../media/placeholder.jpg'

const Poster = () =>{

    return(
        <Content>
            <div id="views">
<img src={eye} alt="" />
<span>208</span>
            </div>
            <div id="poster-img" style={{ backgroundImage: `url(${placeholder})` }}/>
            <h1 id="details">Reuters</h1>
            <img id="more" src={menu} alt="" />
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Inter', sans-serif;
width:90% ;
height:25px ;
margin:0 auto ;
margin-top:20px ;
display:flex ;
align-items:center ;
position:relative ;

#views{
width:55px ;
height: 25px;
display:flex ;
align-items:center ;
justify-content:space-around ;
border-right:1px solid #f2f2f2 ;
border-bottom:2px solid #f2f2f2 ;

span{
color:#f2f2f2 ;
font-size:16px ;
}
    img{
    height:8px ;
    width:auto ;
}
}

#poster-img{
    width:25px ;
    height:25px ;
    background-position:center;
    background-size:cover ;
    border-radius:50% ;
    margin-left:15px ;
}

#details{
    font-size:18px ;
    font-weight:600 ;
    font-family: 'Playfair Display', serif;
    color:#f2f2f2 ;
    padding:0 ;
    margin-left:15px ;
}

#more{
    height:25px ;
    width: 25px;
    cursor: pointer;
    position:absolute ;
    right:0 ;
}
`

export default Poster;