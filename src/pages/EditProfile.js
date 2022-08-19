import vibe from '../media/vibe.png'
import arrow from '../media/Arrow-right.png'
import cloud from '../media/cloud.png'
import placeholder from '../media/placeholder.jpg'
import cancel from '../media/cancel.png'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { pageTransitionRegister } from '../components/animation';

import {useNavigate} from 'react-router-dom';

import Nav from '../components/nav';


//link to where user will go
let link = "/home"

export const EditProfile = () =>{
    //to navigate to a page
const navigate = useNavigate();
    //to rectify else case 
    const changeInput = () =>{
        document.getElementById('confpassword').classList.remove("redded")
    }
   //func to test if passwordis equal to confirm password
   const isvalidPassword = () => {
    let pass=  document.getElementById('password').value
    let conf=  document.getElementById('confpassword').value
    if ( pass===conf ) {
        // this is a valid email address
       navigate('/home')
    }
    else {
        // invalid email
        document.getElementById('password').value= ""
        document.getElementById('confpassword').value= ""
        document.getElementById('confpassword').placeholder="Please make sure both passwords are equal"
        document.getElementById('confpassword').classList.add("redded")
    }
}
    return(
        <>
        <Nav/>
        <Group>
            <BG/>
            <Content variants={pageTransitionRegister} initial="hidden" animate="show" exit="exit">
                <span id='back'>
                    <Link to={link}>
              <img src={arrow} alt="" />
              <p>Go back</p>
              </Link>
                </span>
                <h1 id='upload-header'>Upload an image for your profile picture</h1>
                <div id='upload-frame'>
 <img src={cloud} alt="cloud upload icon" />
                </div>
                <span id='user-img' style={{ backgroundImage: `url(${placeholder})` }}>
                    <img src={cancel} alt="Cancel button to remove image" />
                    </span>
<h1 id='more-header'>More details</h1>
<input type="text" placeholder='Name'/>
<input type="text" placeholder='Preferred username'/>
<input type="password" placeholder='Password' id='password'/>
<input type="password" placeholder='Confirm password' id='confpassword'/>
<button onClick={isvalidPassword}>FINISH</button>
            </Content>
        </Group>
        </>
    )
}

const Group= styled(motion.div)`
font-family: 'Playfair Display', serif;
font-weight:400 ;
width:100vw ;
height:auto ;
    position:absolute ;
    top:50px ;
`
const BG= styled(motion.div)`
width:100% ;
position:fixed ;
height:575px ;
background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${vibe}) ;
    background-position:center ;
    background-size:cover ;
`
const Content= styled(motion.div)`
position:absolute ;
z-index:1 ;
height:auto ;
padding:80px 0;
padding-top:50px ;
width:50% ;
background:#F2F2F2 ;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
display:flex ;
flex-direction:column ;
align-items:center ;

.redded{
    border-bottom:2px solid red ;
    color:red ;
    content:"" ;
    &::placeholder{
        color: red;
    }
}

h1{
    font-weight:600 ;
    font-size:20px ;
    width:500px ;
}
#back{
    width:500px ;
  height: 30px;
  cursor: pointer;
  a{
    display:flex ;
  align-items:center ;
  justify-content:flex-start ;
  }
    
  p{
    margin-left:30px ;
    font-weight:700 ;
    font-size:16px ;
  }

  &:hover{
    img{transform:translateX(-10px) ;
    transition:.2s ease-in}
  }
}

#upload-header{
    margin-top:50px ;
    text-align:center ;
}

#upload-frame{
    cursor: pointer;
width:400px ;
height:200px ;
display:flex ;
align-items:center ;
justify-content:center ;
border: 2px dashed #363636;
border-radius: 10px;
margin-top:20px ;

img{
    width:75px ;
}
}

#user-img{
    width:250px ;
    height:250px ;
    background-position:center center;
    background-size:cover ;
    margin-top:20px ;

    img{
        opacity:.2 ;
        width:30px ;
        cursor: pointer;
        margin-top:4px ;
        margin-left:4px ;
        &:hover{
            opacity:1 ;
        }
    }
}

#more-header{
margin-top:85px ;
}

input{
    width:400px ;
    height:40px ;
    border:none ;
    border-bottom:2px solid #000 ;
    margin-top:30px ;
    background:none ;
    padding-left:10px ;
    font-size:18px ;
        font-family: 'Playfair Display', serif;
        font-weight:400 ;
    &::placeholder{
        color:#363636 ;
        font-size:18px ;
        font-family: 'Playfair Display', serif;
        font-weight:400 ;
    }
}

button{
    width:400px ;
    height:50px ;
    font-size:20px ;
    border-radius:7px ;
    margin-top:80px;
}
`
