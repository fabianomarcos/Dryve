import styled from 'styled-components';
import { primary_blu_5, secondary_blu_5, white } from '../../styles/variables';

export const Container = styled.div`
    background: ${white};
    color: ${secondary_blu_5};
    height: 120px;
    min-width: 260px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 16px 16px 18px;
    border-radius: 8px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        font-size: 32px;
    }

    svg {
        color: ${primary_blu_5};
    }
`;
