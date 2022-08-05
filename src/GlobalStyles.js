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
    font-family: 'Inter', sans-serif;
    font-weight:400 ;
}

input{
    outline:none ;
}

a{
    color:black ;
    text-decoration:none ;
}
`

export default GlobalStyles;