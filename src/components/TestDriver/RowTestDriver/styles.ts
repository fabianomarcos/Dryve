import styled, { css } from 'styled-components';

interface IProps {
    expired: boolean;
}

export const Container = styled.div<IProps>`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    gap: 16px;
    padding: 24px;
    background: #ffffff;
    min-width: 544px;
    width: 100%;
    border-radius: 8px;

    img {
        background-size: cover;
        width: 96px;
        height: 72px;
        border: 1px solid #efefef;
        filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.08));
        border-radius: 4px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        font-size: 12px;

        strong {
            color: #1d2c4b;
        }

        font-weight: normal;
    }

    div + div {
        justify-content: space-evenly;

        ${props =>
            props.expired &&
            css`
                align-items: flex-end;
            `}

        ${props =>
            !props.expired &&
            css`
                align-items: center;
            `}
    }
`;

export const TestDriverExpired = styled.div`
    gap: 10px;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    color: #666666;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;

        background: #ffab00;
        color: #ffffff;
        padding: 4px 8px;
        border-radius: 500px;
        font-weight: 600;
    }
`;

export const TestDriverScheduled = styled.div`
    gap: 10px;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    color: #666666;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;

        background: #cce8fe;
        color: #1d2c4b;
        padding: 4px 8px;
        border-radius: 500px;
        font-weight: 600;
    }
`;
