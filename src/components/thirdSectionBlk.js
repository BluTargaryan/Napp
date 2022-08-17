//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import Poster from "./poster";
import SectionHeader from "./sectionHeader";

import clock from '../media/clock.png'
import bw from '../media/bw.png'

const ThirdSection = () =>{

    return(
        <Content>
            <Poster/>
            <div id="hero">
            <h1 id="hero-txt">Cinemas Ban Groups Watching 'Minions: The Rise of Gru' in Formal Attire</h1>
            <div id="img" style={{ backgroundImage: `url(${bw})` }}/>
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
background:black ;
color:#f2f2f2 ;

#hero{
    display:flex ;
    flex-direction:column ;
margin-top:80px ;
position: relative;

h2{
    margin-top:25px ;
    margin-left:15% ;
    font-size:15px ;
    font-weight:600 ;
    width:80% ;
}
}

#hero-txt{
    width: 85%;
    font-size:20px ;
    margin:0 auto ;
}

#img{
    margin-top:50px ;
    width:80%;
    height: 120px;
    background-size:cover ;
    background-position:center ;
    margin-left:20% ;
}

#Date{
    font-family: 'Inter', sans-serif;
        font-weight:500 ;
        display:flex ;
        align-items:center ;
        justify-content:space-between ;
        width:140px ;
        margin-top:45px ;
        margin-left:30px ;

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