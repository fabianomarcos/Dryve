import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: #ffffff;
    color: #1d2c4b;
    cursor: pointer;

    display: grid;
    grid-template-columns: 1fr 1fr 3fr;

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
