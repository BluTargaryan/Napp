//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import Poster from "./poster";
import SectionHeader from "./sectionHeader";

import clock from '../media/clock-white.png'

import { miniSectionReveal } from "./animation";

import { useScroll } from "./scroll";

import blue from '../media/blue.png'

const ThirdSection = () =>{
    const[element,controls] = useScroll();
    return(
       
        <Content variants={miniSectionReveal} initial="hidden" animate={controls} ref={element} style={{ background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${blue})`, backgroundSize:`cover`, backgroundPosition:`center center`, backgroundRepeat:`no-repeat`}}>
            <Poster/>
            <div id="hero">
            <h1 id="hero-txt">Cinemas Ban Groups Watching 'Minions: The Rise of Gru' in Formal Attire</h1>
            <h2>Immediately following the release of Minions: The Rise of Gru, teens kicked off an interesting trend through social media.</h2>
                <div id="Date">
                
                <img src={clock} alt="" />
                <p>July 4, 2022</p>
               <div> 
                
               </div>
                </div>
                
            </div>
        </Content>

        
    )
}

const Content = styled(motion.div)`
width:25% ;
height:100% ;
background-color:black ;
color:#f2f2f2 ;

#hero{
    display:flex ;
    flex-direction:column ;
margin-top:80px ;
position: relative;
padding-left:30px ;

h2{
    font-size:14px ;
    font-weight:600 ;
    width:50% ;
    margin-top:50px ;
}
}

#hero-txt{
    width: 80%;
    font-size:20px ;
}


#Date{
    font-family: 'Inter', sans-serif;
        font-weight:500 ;
        display:flex ;
        align-items:center ;
        justify-content:space-between ;
        width:140px ;
        margin-top:130px ;

        img{
            width:24px ;
            height: 24px;
        }

        p{
            font-size:16px ;
        }
}
`

export default ThirdSection;