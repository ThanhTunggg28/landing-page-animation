import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --purple-primary: #554dde;
        --accent-pink: #f44e77;
        --neutral-light: #f2f6ff;
        --lavender--secondary: #6a6d9e;
        --dark-primary: #16194f;
        --border-colour: #cab6f1;
    }
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }

    body {
        background-color: var(--neutral-light);
        color: #fff;
        font-size: 1.2rem;
    }
    a {
        color: inherit;
    }
    p {
        color: var(--lavender--secondary);
        line-height: 1.8rem;
    }
    .secondary-heading {
        font-size: 3rem;
        color: var(--purple-primary);
    }
    .small-heading {
        font-size: 2.2rem;
        color: var(--purple-primary);
        text-align: center;
    }
    span {
        color: var(--accent-pink);
    }

`;

export default GlobalStyle;
