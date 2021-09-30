import styled, { css } from 'styled-components';

interface IProps {
    littleSideMenu: boolean;
}

export const Container = styled.div`
    padding: 8px;
`;

export const Content = styled.div<IProps>`
    display: grid;
    grid-template-columns: 280px 1fr;
    // grid-template-columns: 88px 1fr;
    height: 100%;

    background: #e5e5e5;
    margin: 0;

    ${props =>
        props.littleSideMenu
            ? css`
                  grid-template-columns: 88px 1fr;
              `
            : css`
                  grid-template-columns: 280px 1fr;
              `}
`;
