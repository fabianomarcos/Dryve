import styled from 'styled-components';
import { shade } from 'polished';
import { white } from '../../styles/variables';

export const Container = styled.div`
    background: ${white};
    border: 0.2px solid ${shade(0.1, white)};
    height: 264px;
    min-width: 828px;
    width: 100%;
    border-radius: 8px;
`;
