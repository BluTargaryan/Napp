import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
}

body{
    width:100% ;
    overflow-x:hidden ;
    font-family: 'Playfair Display', serif;
    font-weight:400 ;
    &::-webkit-scrollbar {
    display: none;
}
}

input{
    outline:none ;
}

button{
    background:black ;
    border:none ;
    cursor: pointer;
    border-radius: 7px;
    color:#F2F2F2 ;
    &:hover{
        border:2px solid #000 ;
        background:none ;
        color:black ;
        transition:.2s ease-in ;
    }
}

a{
    color:black ;
    text-decoration:none ;
}
`

export default GlobalStyles;