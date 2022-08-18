
import bw from '../media/bw.png'

//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { pageTransition} from '../components/animation';

import { useNavigate } from 'react-router-dom';



const Login = () =>{

    const navigate = useNavigate()
    return(
        <Content >
        <Register variants={pageTransition} initial="hidden" animate="show" exit="exit">
<span id='hero-text'>Welcome to Napp, the world’s first free, no ads, news website.</span>
<h1>login</h1>
<input type="text" placeholder='Username'/>
<input type="password" placeholder='Password'/>
<span id='forgotPassword'>
    <span><Link to="/fp">Forgot password?</Link></span>
</span>
<button onClick={()=>navigate('/home')}>
    next
    </button>
<Link to="/signup">
<span id='linkLogin'>You don't have an account?</span>
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









