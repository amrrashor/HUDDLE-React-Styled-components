import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');


* {
    box-sizing:border-box
}

body {
    margin:0;
    font-family: 'Roboto', sans-serif;
}

img {
    max-width:100%;
}

a {
    text-decoration:none;
}
`

export default GlobalStyles