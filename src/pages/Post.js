import React ,{useEffect} from "react";

import Nav from '../components/nav';
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import minion from '../media/minions.png'
import { homePageTransition } from "../components/animation";
import PosterPost from "../components/posterpost";
import Comments from "../components/comments";
import SectionHeader from "../components/sectionHeaderCat";

let arrowto = "/category"
export const Post = () =>{

    return(
        <>
        <Nav/>

       <Main variants={homePageTransition} initial="hidden" animate="show" exit="exit">
       <SectionHeader
       link={arrowto}/>
<div id="content"> 
<img src={minion} alt="minions" />
<h1>Cinemas Ban Groups Watching 'Minions: The Rise of Gru' in Formal Attire</h1>
<span id="date">July 8, 2022</span>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor nulla sodales ornare ullamcorper. Vestibulum molestie, leo id consectetur rhoncus, nunc massa ultricies orci, in ornare enim enim ut leo. Sed arcu tellus, gravida nec augue sit amet, tincidunt malesuada ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel consequat nulla, sed blandit enim. Aliquam posuere ante ut lacus volutpat, quis hendrerit tortor feugiat. In sollicitudin facilisis tincidunt. Duis tincidunt bibendum malesuada. Fusce vitae vehicula lorem, a pulvinar odio. Nullam nisl diam, placerat non lorem sit amet, dictum dignissim tellus. Sed quam libero, interdum in lacinia in, pharetra id ipsum.

Integer pretium, nisl quis ornare consequat, ipsum turpis dictum tellus, ut pharetra diam elit eu risus. Nulla pulvinar neque a tellus tempus ornare. Vestibulum scelerisque lectus eu ex euismod, et gravida est bibendum. Nunc aliquam mi quis congue facilisis. In hac habitasse platea dictumst. Aenean sed luctus nibh, et elementum leo. Mauris dui justo, porta aliquam tristique sed, vulputate ac massa.
</p>
<PosterPost/>

<span id="comment-header">Comments</span>
<input id="input" type="text" placeholder="Write a comment" />
<Comments/>
<Comments/>
</div>

       </Main>
        </>
    )
}

const Main = styled(motion.div)`
background:#f2f2f2 ;
width:100vw ;
height:auto ;
position:absolute ;
    top:50px ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;

#content{
    height:auto ;
    width:70% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    
    img{
        width:80% ;
        height:auto ;
        margin-top:20px ;
    }
    h1{
        font-size:40px ;
        font-weight:700 ;
        margin-top:25px ;
    }
    #date{
        font-size:20px ;
        align-self:flex-start ;
        margin-top:35px ;
        font-family: 'Inter', sans-serif;
    }
    p{
        width:100% ;
        margin-top:35px ;
        font-size:20px ;
    }
    #comment-header{
        align-self:flex-start ;
        margin-top:150px ;
        font-weight:600 ;
        font-size:25px ;
    }
    #input{
        margin-top:40px ;
        width:100% ;
        height:40px ;
        background: none;
        border:none ;
        border-bottom:1px solid black ;
        padding-left:20px ;
        font-size:20px ;
        margin-bottom:100px ;
     &::placeholder{
        font-size:20px ;
        vertical-align: middle;
     }
    }

}
`

export default Post