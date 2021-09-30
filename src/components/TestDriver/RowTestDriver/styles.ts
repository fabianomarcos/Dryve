import styled, { css } from 'styled-components';
import { secondary_blu_5, white } from '../../../styles/variables';

interface IPropsImage {
    image: string;
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    gap: 16px;
    padding: 24px;
    background: ${white};
    min-width: 544px;
    width: 100%;
    border-radius: 8px;

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        font-size: 12px;

        strong {
            color: ${secondary_blu_5};
        }

        font-weight: normal;
    }
`;

export const TestDriverExpired = styled.div`
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    flex-direction: column;

    margin-left: 48px;
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
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    flex-direction: column;

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
        color: ${secondary_blu_5};
        padding: 4px 8px;
        border-radius: 500px;
        font-weight: 600;
    }
`;

export const Image = styled.div<IPropsImage>`
    ${props =>
        props.image &&
        css`
            background: url(${props.image});
            background-size: cover;
            border-radius: 4px;
            border: 1px solid #efefef;
            width: 96px;
            height: 72px;
        `}
`;
