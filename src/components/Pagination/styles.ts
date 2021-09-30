import styled from 'styled-components';
import { primary_blu_5, secondary_blu_5, white } from '../../styles/variables';

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    background: ${white};
    height: 28px;
    width: 100%;
    padding: 24px 16px 16px;
    margin-bottom: 24px;
    font-size: 12px;

    button {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        color: ${white};
        border: ${white};
        background: ${primary_blu_5};
    }

    button + button {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        color: ${secondary_blu_5};
        border: ${white};
        background: ${white};
    }

    svg {
        color: ${primary_blu_5};
        margin-left: 18px;
    }
`;
