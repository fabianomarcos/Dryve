import styled, { css } from 'styled-components';

interface IContainerProps {
    isActive: boolean;
}

export const Container = styled.div<IContainerProps>`
    background: #ffffff;
    color: #1d2c4b;
    cursor: pointer;
    border-radius: 6px;

    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 8px 0;
        gap: 8px;
        border-radius: 6px;

        svg {
            margin: 0 8px;
        }
    }

    ${props =>
        props.isActive &&
        css`
            color: #ffffff;
            background: #0065ff;
        `};
`;
