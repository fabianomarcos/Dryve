import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface IContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div`
    width: 100%;

    span {
        background: #ffffff;
        padding: 0 4px;
        margin-left: 10px;

        font-size: 10px;
        line-height: 10px;
        color: #a3a3a3;
    }

    div {
        margin-top: -6px;
    }
`;

export const Content = styled.div<IContainerProps>`
    display: flex;
    align-items: center;

    border-radius: 6px;
    border: 1px solid #d1d1d1;
    background: #ffffff;
    color: #1d2c4b;
    padding: 12px;
    width: 100%;
    height: 38px;

    & + div {
        margin-top: 24px;
    }

    h1 {
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
    }

    ${props =>
        props.isErrored &&
        css`
            color: #c53030;
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            color: #1d2c4b;
            border-color: #1d2c4b;
        `}

  ${props =>
        props.isFilled &&
        css`
            color: #1d2c4b;
        `}

  input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #1d2c4b;

        &::placeholder {
            filter: opacity(0.6);
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
