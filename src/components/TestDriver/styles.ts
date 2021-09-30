import styled from 'styled-components';
import { shade } from 'polished';
import { white } from '../../styles/variables';

export const Container = styled.div`
    background: ${white};
    border: 0.2px solid ${shade(0.1, white)};
    min-width: 544px;
    width: 100%;
    height: 344px;
    border-radius: 8px;
    padding: 16px;
    overflow: auto;

    h4 {
        padding-bottom: 16px;
    }
`;
