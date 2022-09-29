
import bw from '../media/bw.png'
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { pageTransition} from '../components/animation';

import { useNavigate } from 'react-router-dom';

import PreNav from '../components/prenav'
//Firebase
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../Firebase'

//to rectify else case 
const changeInput = () =>{
    document.getElementById('name').classList.remove("redded")  
    document.getElementById('pw').classList.remove("redded")  
}

const Login = () =>{
     //state for user data
     const [users, setUsers] = useState([])
     const navigate = useNavigate()
  useEffect(() => {
    window.addEventListener('popstate', function(event) {
navigate('/')
    });
    //to get user data
    const q = query(collection(db, 'users'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setUsers(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })

  }, [navigate]);
    

    //func to test if details are valid
const isValid = () => {
let name = document.getElementById('name').value
let password = document.getElementById('pw').value
//check if data matches details provided
users.map((user) => {
    
    if((user.data.name!==name)&&(user.data.password!==password)){
         // invalid details
        
         document.getElementById('name').value= ""
         document.getElementById('pw').value= ""
         document.getElementById('name').placeholder="Invalid e-mail"
         document.getElementById('pw').placeholder="Invalid password"
         document.getElementById('name').classList.add("redded")
         document.getElementById('pw').classList.add("redded")
        
    }else{
        navigate('/home',{state:{name:name}})
    }
    return 0
})
}
    return(
        <>
        <PreNav/>
        <Content >
        <Register variants={pageTransition} initial="hidden" animate="show" exit="exit">
<span id='hero-text'>Welcome to Napp, the world’s first free, no ads, news website.</span>
<h1>login</h1>
<input id='name' type="text" placeholder='Username'  onClick={changeInput}/>
<input id='pw' type="password" placeholder='Password'  onClick={changeInput}/>
<span id='forgotPassword'>
    <span><Link to="/fp">Forgot password?</Link></span>
</span>
<button onClick={isValid}>
    next
    </button>
<Link to="/signup">
<span id='linkLogin'>You don't have an account?</span>
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

.redded{
    border-bottom:2px solid red ;
    color:red ;
    content:"" ;
    &::placeholder{
        color: red;
    }
}
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
    margin-top:40px ;
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
export default Login;









