import { createGlobalStyle } from "styled-components"
import media from "styled-media-query"

const GlobalStyles = createGlobalStyle`
    :root {
        --main-color: #fff;
        --accent-color: #e984af;
        --main-transition: all .2s ease-in-out;

        background-color: #2F3437;
    }

    html,
        body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {        
        padding: 0 .8rem;            
        color: var(--main-color);
        font-family: 'Raleway', sans-serif;
    }

    ::selection {
        background-color: #d48a9b;
    }

    img {
        width: 100%;
    }

    main {
        flex: 1 0 auto;
    }

    h1 {
        margin: 4rem 0 0 0;
        font-size: 3rem;
        line-height: 1;

        ${media.lessThan("large")`
            font-size: 2.4rem; 
        `}
    }

    h2 {
        margin: 4rem 0 0 0;
        font-size: 2.25rem;
        line-height: 1;

        ${media.lessThan("large")`
            font-size: 1.65rem; 
        `}
    }

    h3 {
        margin: 2rem 0 0 0;
        font-size: 1.75rem;
        line-height: 1;

        ${media.lessThan("large")`
            font-size: 1.4rem; 
        `}
    }

    h4 {
        margin: 2rem 0 0 0;
        font-size: 1.475rem;
        line-height: 1;

        ${media.lessThan("large")`
            font-size: 1rem; 
        `}
    }

    p {
        margin: 1rem 0 0 0;
        font-size: 1rem;
        line-height: 1.5;

        ${media.lessThan("large")`
            font-size: .9rem; 
        `}
    }

    ul,
    ol {
        margin: 1rem 0;
        font-size: 1rem;
        line-height: 1.5;

        ${media.lessThan("large")`
            font-size: .9rem; 
        `}
    }

    a {
        color: inherit;
        font-size: inherit;
        font-weight: bold;
        text-decoration: underline;

        transition: var(--main-transition);
    }

    a:hover {
        opacity: .8;
    }

`

export default GlobalStyles
