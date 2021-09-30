import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    background: #ffffff;
    height: 28px;
    width: 100%;
    padding: 24px 16px 16px;
    margin-bottom: 24px;
    font-size: 12px;

    button {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        color: #ffffff;
        border: #ffffff;
        background: #0065ff;
    }

    button + button {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        color: #1d2c4b;
        border: #ffffff;
        background: #ffffff;
    }

    svg {
        color: #0065ff;
        margin-left: 18px;
    }
`;
