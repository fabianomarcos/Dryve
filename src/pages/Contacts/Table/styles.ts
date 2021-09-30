import { shade } from 'polished';
import styled from 'styled-components';
import {
    primary_blu_5,
    secondary_blu_5,
    white,
} from '../../../styles/variables';

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
    background: ${white};
    padding: 16px;

    th {
        color: neutral;
        font-weight: normal;
        padding: 10px 25px;
        text-align: left;
        border-bottom: 0.5px solid ${shade(0.05, white)};
    }

    td {
        color: ${secondary_blu_5};
        padding: 8px 16px;
        border-bottom: 0.5px solid ${shade(0.05, white)};
        gap: 16px;

        span {
            width: 48px;
            height: 48px;
            background: primary_blu_10;
            color: ${primary_blu_5};
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
