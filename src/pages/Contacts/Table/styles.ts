import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    border-spacing: 0 8px;
    height: 100%;
    width: 100%;
    overflow-y: auto;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    border-radius: 8px;
    border: 1px solid #efefef;
    background: #ffffff;
    padding: 16px;

    th {
        color: #a3a3a3;
        font-weight: normal;
        padding: 10px 25px;
        text-align: left;
        border-bottom: 0.5px solid ${shade(0.05, '#ffffff')};
    }

    td {
        color: #1d2c4b;
        padding: 8px 16px;
        border-bottom: 0.5px solid ${shade(0.05, '#ffffff')};
        gap: 16px;

        span {
            width: 48px;
            height: 48px;
            background: #eaf9ff;
            color: #0065ff;
            border-radius: 50%;
            padding: 15px;

            font-style: normal;
            font-weight: 500;
            font-size: 18px;
        }
    }

    @media (max-width: 500px) {
        table td {
            width: 90vw;
            display: inline-block;
        }
    }
`;
