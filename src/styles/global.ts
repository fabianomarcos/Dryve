import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #fff;
        color: #1d2c4b;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: -0.025em;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 5px;
        background: #2a2a2a;
    }

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }

    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }
`;
