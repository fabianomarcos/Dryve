import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    background: #ffffff;
    border: 0.2px solid ${shade(0.1, '#ffffff')};
    height: 264px;
    min-width: 828px;
    width: 100%;
    border-radius: 8px;
`;
