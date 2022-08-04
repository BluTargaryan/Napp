import search from '../media/search.png'
import location from '../media/location.png'
import study from '../media/study.png'
import clock from '../media/clock.png'
import placeholder from '../media/placeholder.jpg'

import { useState } from 'react'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

//animation
import { displayClick } from './animation'
import { displayMenuClick } from './animation'
import { inputDisplayClick } from './animation'



const Nav = () =>{
    //state to see if loc menu is open 
const [isLocOpen, setIsLocOpen] = useState(false)

const [isMenuOpen, setIsMenuOpen] = useState(false)
const [isInputOpen, setIsInputOpen] = useState(false)
return(
    <StyledNav>
<TimeLoc>
<div className='time'>
    <img src={clock} alt="Clock" />
    <span>10:24 A.M</span>
</div>
<span className='line'></span>
<div className='loc'
onClick={()=> setIsLocOpen(isLocOpen=>!isLocOpen)}>
    <img src={location} alt="location" />
    <span>NG</span>
</div>

<motion.ul className='loc-menu'
animate={isLocOpen ? "show" : "hidden"}
variants={displayClick}>
<li>US</li>
<li>UK</li>
<li>SA</li>
</motion.ul>
    </TimeLoc>

    <Logo>
<img src={study} alt="newspaper icon" />
<span>Napp</span>
    </Logo>  

    <Search>
        <motion.input type="text" 
        animate={isInputOpen ? "show" : "hidden"}
        variants={inputDisplayClick}/>
<img className='searchIcon' 
onClick={()=> setIsInputOpen(isInputOpen=>!isInputOpen)}
src={search} alt="search icon" />

<img className='userIcon' 
onClick={()=> setIsMenuOpen(isMenuOpen=>!isMenuOpen)}
src={placeholder} alt="user placeholder " />
<motion.div className='profileMenu'
animate={isMenuOpen ? "show" : "hidden"}
variants={displayMenuClick}>
<h1 className='profileName'>Zee Only</h1>
<div className='majorLine'></div>
<ul>
    <li>Edit profile</li>
    <li className='minorLine'></li>
    <li id='logout'>Log out</li>
    <li className='minorLine Red'></li>
</ul>
</motion.div>
    </Search>  
</StyledNav>
)
  

    
}

const StyledNav= styled(motion.nav)`
width:100%;
height:50px ;
position:absolute ;
z-index:1;
background:#f2f2f2 ;
display:flex ;
padding:0 30px ;
box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.25);
justify-content:space-between ;
`

const TimeLoc = styled(motion.div)`
cursor: pointer;
width:150px ;
height:auto ;
display:flex ;
justify-content:space-between;
align-items:center ;

ul{
    list-style:none ;
}

.loc-menu{
    position:absolute ;
    background:#f2f2f2 ;
    width:40px ;
    height:70px ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-around ;
    align-items:center ;
    margin-top:40px ;
    margin-left:118px ;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
    li{
        font-size:18px ;
        font-weight:bold ;
    }
}

.time,.loc{
    height:auto ;
    display:flex ;
    align-items:center ;
    font-size: 17px;

    img{
        height:17px ;
        width:auto ;
    }
}

.line{
    width:3px ;
    height: 18px;
    background: #000;
}
`
const Logo = styled(motion.div)`
cursor: pointer;
width:95px ;
font-size:25px ;
font-weight:bold ;
display:flex ;
align-items:center ;

img{
    height:30px ;
    width:auto ;
}
`
const Search = styled(motion.div)`
width:auto;
cursor: pointer;
display:flex ;
align-items:center ;
justify-content:space-around ;
input{
border:none ;
background:none ;
border-bottom:1.7px solid #000 ;
margin-right:10px ;
}
.searchIcon{
    margin-right:10px ;
    height:20px ;
    width:auto ;
}
.userIcon{
    width:22px ;
    height:22px ;
    border-radius:50% ;
}
.profileMenu{
    position:absolute ;
    right:0 ;
    margin-top:50px ;
    background: #f2f2f2;
    width:290px ;
    height:200px ;
    box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.25);

    h1{
        margin-top:15px ;
        margin-left:25px ;
        font-size:22px ;
    }
    .majorLine{
        width:100% ;
        height:3px ;
        margin-top:12px ;
        background-color:#000 ;
    }

    ul{
        list-style:none ;
    }
    li{
        margin-top:18px ;
        margin-left:25px ;
        font-size:18px ;
    }
    .minorLine{
        width:100% ;
        height:3px ;
        margin-top:12px ;
        background-color:#000 ;
        margin-left:25px ;
    }
    #logout{
        color:#890000 ;
    }
    .Red{
 background:#890000 ;
    }
}
`
export default Nav;