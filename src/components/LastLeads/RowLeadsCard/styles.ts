import styled from 'styled-components';
import { secondary_blu_5, white } from '../../../styles/variables';

export const Container = styled.div`
    background: ${white};
    color: ${secondary_blu_5};
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
