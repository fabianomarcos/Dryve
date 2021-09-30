import styled from 'styled-components';
import { shade } from 'polished';
import { white } from '../../styles/variables';

export const Divider = styled.div`
    border-bottom: 0.5px solid ${shade(0.05, white)};
    margin: 0 -16px;
`;
