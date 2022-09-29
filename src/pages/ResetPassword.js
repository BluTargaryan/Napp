
import bw from '../media/bw.png'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link,useLocation } from 'react-router-dom';

import { pageTransition} from '../components/animation';

import { useNavigate } from 'react-router-dom';

import PreNav from '../components/prenav';
//Firebase
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../Firebase'

export const ResetPassword = () =>{
//Location
const { state } = useLocation();
    const navigate = useNavigate()

/* function to update document in firestore */
const handleUpdate = async (e) => {
    const taskDocRef = doc(db, 'users', state.id)
    try{
      await updateDoc(taskDocRef, {
        password:  document.getElementById('password').value
      })
    } catch (err) {
      alert(err)
    }    
  }
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
        handleUpdate()
       navigate('/')
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
        <PreNav/>
        <Content >
        <Register variants={pageTransition} initial="hidden" animate="show" exit="exit">
<span id='hero-text'>Welcome to Napp, the world’s first free, no ads, news website.</span>
<h1>new password</h1>
<input type="password" placeholder='Password' id='password'/>
<input type="password" placeholder='Confirm password' id='confpassword' onClick={changeInput}/>
<span id='forgotPassword'>
    <span><Link to="/">Last chance. Remembered it yet?</Link></span>
</span>
<button onClick={isvalidPassword}>
    set new password
    </button>


        </Register>
        </Content>
        </>
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
    margin-top: 40px;
    font-size:18px ;
}

h1{
    text-transform:uppercase ;
font-weight:600 ;
margin-top:50px ;
}

input{
width:440px ;
height:40px ;
background:none ;
border:none ;
border-bottom:2px solid black ;
font-size:20px ;
padding-left:16px ;
margin-top:40px ;
}

.redded{
    border-bottom:2px solid red ;
    color:red ;
    content:"" ;
    &::placeholder{
        color: red;
        content:"Must be the same as the password above" ;
    }
}

#forgotPassword{
width:440px ;
padding-left:16px ;
margin-top:10px ;
span{
    float:left ;
    color:#363636 ;
    font-weight:600 ;
    cursor: pointer;

    &:hover{
        border-bottom:2px solid #363636 ;
    }
}
}

button{
    font-family: 'Playfair Display', serif;
    text-transform:uppercase ;
    width:300px ;
    height:40px ;
    font-size:18px ;
    margin-top:60px ;
    color:#f2f2f2 ;

    &:hover{
        border:2px solid black ;
        background:none ;
            color:black ;
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










