import styled from 'styled-components';
import { shade } from 'polished';

export const Divider = styled.div`
    border-bottom: 0.5px solid ${shade(0.05, '#ffffff')};
    margin: 0 -16px;
`;
