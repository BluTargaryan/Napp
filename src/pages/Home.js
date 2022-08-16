//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

//Comps
import NewsSection from "../components/newsSection";

const Home = () =>{

    return(
        <Content>
            <NewsSection/>
        </Content>
    )
}

const Content = styled(motion.div)`
width:100vw ;
height:auto ;
position:absolute ;
    top:50px ;
`

export default Home;