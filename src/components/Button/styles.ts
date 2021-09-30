import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { primary_blu_5, white } from '../../styles/variables';

interface IProps {
    typeButton: string;
}

export const Container = styled.button<IProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13.5px;

    background: ${primary_blu_5};
    color: ${white};
    font-weight: 600;
    font-style: normal;
    font-size: 14px;
    line-height: 14px;

    border-radius: 6px;
    border: 0;
    padding: 8px 16px;
    width: 124px;
    height: 38px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, primary_blu_5)};
    }

    ${props =>
        props.typeButton === 'white' &&
        css`
            color: ${primary_blu_5};
            background: ${white};
            width: 100px;

            &:hover {
                background: ${shade(0.2, white)};
            }
        `}
`;
