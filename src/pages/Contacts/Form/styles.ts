import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 31px 26px 24px 24px;

    h1 {
        width: 100%;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #1d2c4b;
    }

    svg {
        color: #0065ff;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 25px;
`;

export const ContentForm = styled.div`
    width: 100%;
    max-width: 640px;
    background: #ffffff;
    padding: 16px 32px 16px 16px;

    .title {
        color: #1d2c4b;
        //padding-bottom: 16px;
        border-bottom: 5px solid #efefef;
    }

    form {
        width: 100%;
        padding: 50px 0 0 16px;
        // padding-top: 16px;
        // border-top: 5px solid #000000;

        .radio_buttons {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
`;

export const TitleSection = styled.div`
    color: #0065ff;
    font-weight: 600;
    font-size: 16px;
    margin: 24px 0;

    section {
        max-width: 25%;
    }
`;

export const EqualSizeFields = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
`;

/* const appearFromUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-150px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`; */

/* export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${appearFromUp} 1s;
    form {
        margin: 40px 0;
        text-align: center;
        .input-content {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .button-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 21.8%;
            a {
                margin: 0;
            }
            .success {
                background: green;
            }
        }
        h1 {
            margin-bottom: 24px;
        }
        div {
            text-align: left;
            span {
                margin: 5px;
            }
        }
        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }
        }
    }
    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        svg {
            margin-right: 16px;
        }
        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
    @media (max-width: 1244px) {
        .button-content {
            padding: 0 20px;
        }
    }
    @media (max-width: 900px) {
        table td {
            width: 90vw;
            display: inline-block;
        }
        th {
            display: none;
        }
    }
    @media (max-width: 500px) {
        .input-content {
            flex-wrap: wrap;
            justify-content: center;
            div {
                width: 100%;
            }
        }
        .button-content {
            display: flex !important;
            width: 90vw;
            margin: 0 auto;
            flex-wrap: wrap;
            flex-direction: column-reverse;
        }
        table td {
            width: 90vw;
            display: inline-block;
        }
        th {
            display: none;
        }
    }
`;
 */
