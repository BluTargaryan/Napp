//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import Poster from "./poster";

import clock from '../media/clock-white.png'
import minion from '../media/minions.png'
import { miniSectionReveal } from "./animation";

import { useScroll } from "./scroll";

const HalfSection = () =>{
    const[element,controls] = useScroll();
    return(
        <Content variants={miniSectionReveal} initial="hidden" animate={controls} ref={element} style={{ background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${minion})`, backgroundSize:`cover`, backgroundPosition:`center center` }}>
            <Poster/>

            <div id="hero">
                <div id="smallTxtnDate">
<h2>Immediately following the release of Minions: The Rise of Gru, teens kicked off an interesting trend through social media.</h2>
               <div> 
                <img src={clock} alt="" />
                <p>July 4, 2022</p>
               </div>
                </div>
                <h1 id="hero-txt">Cinemas Ban Groups Watching 'Minions: The Rise of Gru' in Formal Attire</h1>
            </div>
        </Content>
    )
}

const Content = styled(motion.div)`
width:50% ;
height:100% ;
background:black ;

#hero{
    width:100% ;
    display:flex ;
    color:white ;
    position:relative ;
}

#smallTxtnDate{
    width:auto ;
    margin-top:350px ;
    margin-left:50px ;

    h2{
        width:185px ;
        font-size:14px ;
        font-weight:500 ;

    }

    div{
        font-family: 'Inter', sans-serif;
        font-weight:500 ;
        display:flex ;
        align-items:center ;
        justify-content:space-between ;
        width:140px ;
        margin-top:30px ;

        img{
            width:24px ;
            height: 24px;
        }

        p{
            font-size:16px ;
        }
    }
}

#hero-txt{
   margin-right:20px ;
   margin-top:45px ;
width:250px ;
position:absolute ;
right:0 ;
top:0 ;
}

`

export default HalfSection;