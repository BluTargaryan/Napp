import clock from '../media/clock-white.png'
import { motion } from "framer-motion";
import styled from "styled-components";

 const Date = () =>{
    return(
<Content>
    <img src={clock} alt="" />
    <span>July 4, 2022</span>
</Content>
    )
}

const Content = styled(motion.div)`
width:180px ;
display:flex ;
align-items:center ;
justify-content:space-between ;

img{
    height: 30px;
}
span{
    font-size:20px ;
}
`

export default Date;