import styled, { css } from 'styled-components';
import { neutral, secondary_blu_5, white } from '../../styles/variables';
import Tooltip from '../Tooltip';

interface IContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div`
    width: 100%;

    span {
        background: ${white};
        padding: 0 4px;
        margin-left: 10px;

        font-size: 10px;
        line-height: 10px;
        color: ${neutral};
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
    background: ${white};
    color: ${secondary_blu_5};
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
            color: ${secondary_blu_5};
            border-color: ${secondary_blu_5};
        `}

  ${props =>
        props.isFilled &&
        css`
            color: ${secondary_blu_5};
        `}

  input {
        flex: 1;
        background: transparent;
        border: 0;
        color: ${secondary_blu_5};

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
        color: ${white};

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
