import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;

    padding: 24px;
    background: #ffffff;
    // border: 0.2px solid ${shade(0.1, '#ffffff')};
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
        justify-content: center;
    }

    div + div {
        align-items: flex-end;
    }
`;
