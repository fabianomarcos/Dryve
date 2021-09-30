import styled from 'styled-components';
import { neutral, white } from '../../styles/variables';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background: ${white};
    color: ${neutral};
    border: 1px solid #d1d1d1;
    border-radius: 6px;
    padding: 18px 24px;
    height: 38px;
    max-width: 275px;
    min-width: 200px;
    font-size: 14px;

    & + div {
        margin-top: 24px;
    }

    h1 {
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #d1d1d1;

        &::placeholder {
            color: #d1d1d1;
        }
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
