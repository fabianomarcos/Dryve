import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    background: #ffffff;
    border: 0.2px solid ${shade(0.1, '#ffffff')};
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
