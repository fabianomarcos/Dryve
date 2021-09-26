import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    background: #ffffff;
    border: 0.2px solid ${shade(0.1, '#ffffff')};
    height: 263px;
    min-width: 260px;
    width: 100%;
    border-radius: 8px;
    overflow-y: scroll;
    padding: 16px;

    p {
        font-size: 14px;
        color: #1d2c4b;
    }
`;
