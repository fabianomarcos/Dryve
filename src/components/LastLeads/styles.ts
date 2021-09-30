import styled from 'styled-components';
import { shade } from 'polished';
import { secondary_blu_5, white } from '../../styles/variables';

export const Container = styled.div`
    background: ${white};
    border: 0.2px solid ${shade(0.1, white)};
    height: 263px;
    min-width: 260px;
    width: 100%;
    border-radius: 8px;
    overflow-y: scroll;
    padding: 16px;

    p {
        font-size: 14px;
        color: ${secondary_blu_5};
    }
`;
