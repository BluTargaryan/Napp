
import bw from '../media/bw.png'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { Link } from 'react-router-dom';

import { pageTransition } from '../components/animation';

import {useNavigate} from 'react-router-dom';


//link to where user will go
let link = "/signup"


//to rectify else case 
const changeInput = () =>{
    document.getElementById('email').classList.remove("redded")
}


const SignUp = () =>{
    //to navigate to a page
const navigate = useNavigate();
//func to test if target is email
const isvalidEmail = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email=  document.getElementById('email').value
    if ( re.test(email) ) {
        // this is a valid email address
       navigate('/register')
    }
    else {
        // invalid email
        document.getElementById('email').classList.add("redded")
    }

}



    return(
        <Content >
        <Register variants={pageTransition} initial="hidden" animate="show" exit="exit">
<span id='hero-text'>Welcome to Napp, the world’s first free, no ads, news website.</span>
<h1>sign up</h1>
<input id='email' type="email" placeholder='E-mail' onClick={changeInput}/>
<button onClick={isvalidEmail}>
<Link to={link}>next</Link>
</button>
<Link to="/">
<span id='linkLogin'>You already have an account?</span>
</Link>
        </Register>
        </Content>
    )
}

const Content = styled(motion.div)`
font-family: 'Playfair Display', serif;
font-weight:400 ;
width:100vw ;
height:575px ;
background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${bw}) ;
    background-position:center ;
    background-size:cover ;
    position:absolute ;
    top:50px ;
`

const Register = styled(motion.div)`
width:50% ;
height:100% ;
background: #F2F2F2;
float:right ;
display:flex ;
flex-direction:column ;
align-items:center ;

#hero-text{
    width:400px ;
    text-align:center ;
    font-weight:600 ;
    margin-top: 60px;
    font-size:18px ;
}

h1{
    text-transform:uppercase ;
font-weight:600 ;
margin-top:70px ;
}

input{
width:440px ;
height:40px ;
background:none ;
border:none ;
border-bottom:2px solid black ;
font-size:20px ;
padding-left:16px ;
margin-top:50px ;
}

.redded{
    border-bottom:2px solid red ;
    color:red ;
    content:"" ;
    &::placeholder{
        color: red;
        content:"Please put in a proper e-mail" ;
    }
}

button{
    font-family: 'Playfair Display', serif;
    text-transform:uppercase ;
    border-radius: 7px;
    width:300px ;
    height:40px ;
    font-size:18px ;
    margin-top:60px ;

    a{
        color:#F2F2F2 ;
    }

    &:hover{
        a{
            color:black ;
        }
    }
}
a{
    margin-top:40px ;
}
#linkLogin{
    font-weight:600 ;
    font-size:18px ;
    cursor: pointer;

    &:hover{
        border-bottom:2px solid black ;
    }
}
`
export default SignUp









