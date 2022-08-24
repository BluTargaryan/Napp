import Date from "./date";
import PosterCat from "./postercat";

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { miniSectionReveal } from "./animation";
import minion from '../media/minions.png'

import { useScroll } from "./scroll";

import Views from "./views";


export const FullSection = () =>{
    const[element,controls] = useScroll();
    return(
<Content variants={miniSectionReveal} initial="hidden" animate={controls} ref={element} style={{ background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${minion})`, backgroundSize:`cover`, backgroundPosition:`center center` }}>
       <Views/>
       <div id="text">
        <h1>Cinemas Ban Groups Watching 'Minions: The Rise of Gru' in Formal Attire</h1>
        <p>Immediately following the release of Minions: The Rise of Gru, teens kicked off an interesting trend through social media.</p>
       </div>
       <div id="datenposter">
        <Date/>
        <PosterCat/>
       </div>
        </Content>
    )
}

const Content = styled(motion.div)`
width:100% ;
height:580px ;
background:black;
margin:none;
color:white ;

#text{
    width: 700px;
display:flex ;
margin-top:80px ;
align-items:center ;
justify-content:space-between ;
float:right ;
margin-right:80px ;

h1{
    font-size:40px ;
    width: 300px;
}
p{
    width: 260px;
    font-size:24px ;
}
}

#datenposter{
    display:flex ;
    align-items:center ;
    justify-content:space-between ;
    float:right ;
    margin-right:80px ;
    margin-top:80px ;
    font-family: 'Inter', sans-serif;
width:700px ;
height:30px ;
}
`
