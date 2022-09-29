
import bw from '../media/bw.png'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import { Link } from 'react-router-dom';

import { pageTransition } from '../components/animation';

import {useNavigate} from 'react-router-dom';

import PreNav from '../components/prenav'
//Firebase
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../Firebase'
//link to where user will go
let link = "/"


//to rectify else case 
const changeInput = () =>{
    document.getElementById('email').classList.remove("redded")
}


export const ForgotPassword = () =>{
     //state for user data
     const [users, setUsers] = useState([])
     /* function to get all users from firestore in realtime */
 useEffect(() => {
     const q = query(collection(db, 'users'), orderBy('created', 'desc'))
     onSnapshot(q, (querySnapshot) => {
       setUsers(querySnapshot.docs.map(doc => ({
         id: doc.id,
         data: doc.data()
       })))
     })
   },[])
    //to navigate to a page
const navigate = useNavigate();
//func to test if target is email
const isvalidEmail = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email=  document.getElementById('email').value
    if ( re.test(email) ) {
        // this is a valid email address
        // to check if email is not equal to one logged
        
        users.map((user) => {
            //Remember: if unaware about state structure:use console check 
            if((user.data.email)===email){
                navigate('/rp',{state:{id:user.id}}) 
            }else{
                //console.log(user.data.email)
                // invalid email
         document.getElementById('email').value=""
          document.getElementById('email').placeholder="Use a registered email"
          document.getElementById('email').classList.add("redded") 
            }
        })
       //navigate('/rp')
    }
    else {
        // invalid email
        document.getElementById('email').classList.add("redded")
    }

}



    return(
        <>
        <PreNav/>
        <Content >
        <Register variants={pageTransition} initial="hidden" animate="show" exit="exit">
<span id='hero-text'>Welcome to Napp, the world’s first free, no ads, news website.</span>
<h1>forgot password?</h1>
<input id='email' type="email" placeholder='Enter your e-mail' onClick={changeInput}/>
<button onClick={isvalidEmail}>
<Link to={link}>next</Link>
</button>
<Link to="/">
<span id='linkLogin'>You remembered your password?</span>
</Link>
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
export default ForgotPassword;









