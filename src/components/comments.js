//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import UserPoster from "./userposter";

const Comments = () =>{

    return(
        <Content>
            <UserPoster/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor nulla sodales ornare ullamcorper. Vestibulum molestie, leo id consectetur rhoncus, nunc massa ultricies orci, in ornare enim enim ut leo</p>
        </Content>
    )
}

const Content = styled(motion.div)`
width:100% ;
height:auto ;
margin-bottom:60px ;

p{
    width:100% ;
    margin-top:20px ;
}
`

export default Comments;