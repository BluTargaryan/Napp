//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";


import eye from '../media/eye.png'
import menu from '../media/menu-vert.png'
import placeholder from '../media/placeholder.jpg'

const Views = () =>{

    return(
        <Content>
            <div id="views">
<img src={eye} alt="" />
<span>208</span>
            </div>
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Inter', sans-serif;
width:90% ;
height:25px ;
margin:0 auto ;
display:flex ;
align-items:center ;

#views{
width:80px ;
height: 25px;
display:flex ;
align-items:center ;
justify-content:space-around ;
margin-top:30px ;

span{
color:#f2f2f2 ;
font-size:16px ;
}
    img{
    height:16px ;
    width:auto ;
}
}

`

export default Views;