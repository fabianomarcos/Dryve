import styled, { css } from 'styled-components';
import {
    primary_blu_5,
    secondary_blu_5,
    white,
} from '../../../styles/variables';

interface IContainerProps {
    isActive: boolean;
}

export const Container = styled.div<IContainerProps>`
    background: ${white};
    color: ${secondary_blu_5};
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
            color: ${white};
            background: ${primary_blu_5};
        `};
`;
