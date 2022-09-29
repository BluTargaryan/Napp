//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";
import { Link,useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import { useNavigate ,UNSAFE_NavigationContext } from 'react-router-dom';

//Comps
import Section from "../components/section";

import { homePageTransition } from "../components/animation";



const Home = () =>{
    //Location
    const { state } = useLocation();
    const navigate = useNavigate();
    //to prevent user going back

    useEffect(() => {
        window.scrollTo(0, 0)
        window.addEventListener('popstate', function(event) {
            navigate('/home',{state:{name:state.name}})
                });
      }, []);
    return(
        <>
        <Nav name={state.name}/>
        <Content variants={homePageTransition} initial="hidden" animate="show" exit="exit">
            <Section/>
            <Section/>
        </Content>
        </>
    )
}

const Content = styled(motion.div)`
width:100vw ;
height:auto ;
position:absolute ;
    top:50px ;
    
`

export default Home;