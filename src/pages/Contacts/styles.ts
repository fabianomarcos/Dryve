import styled from 'styled-components';
import { secondary_blu_5 } from '../../styles/variables';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    background: #e5e5e5;
    margin: 0;
    padding: 24px 31px;

    h1 {
        color: ${secondary_blu_5};
        font-weight: 600;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -0.025em;
    }

    table {
        width: inherit;
    }

    .contentName {
        display: flex;
        gap: 15px;
        align-items: center;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`;

export const TableContainer = styled.div`
    height: 95%;
    padding-bottom: 24px;
    margin-bottom: 15px;
    gap: 28px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding-bottom: 24px;
    width: 100%;

    h1 {
        padding-bottom: 0;
    }

    svg {
        cursor: pointer;
    }
`;
