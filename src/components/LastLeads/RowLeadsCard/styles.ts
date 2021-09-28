import styled from 'styled-components';

export const Container = styled.div`
    background: #ffffff;
    color: #1d2c4b;
    cursor: pointer;

    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    align-items: center;

    padding: 16px 0;
    gap: 8px;
    border-radius: 6px;

    span {
        text-align: end;
    }

    svg {
        margin: 0;
    }
`;

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    border-radius: 500px;
    width: 32px;
    height: 32px;
`;
