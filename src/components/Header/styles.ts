import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    background: #ffffff;
    border-bottom: 0.2px solid ${shade(0.2, '#ffffff')};

    header {
        min-width: 100vw;
        height: 72px;
        margin: 0;
        padding: 24px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: #1d2c4b;
        }

        section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            svg:first-child {
                border: 1px solid #0065ff;
                padding: 2px;
                border-radius: 50%;
            }

            svg + svg {
                color: #1d2c4b;
                border: 0;
            }
        }

        svg {
            color: #0065ff;
        }
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 28px;
    }
`;

export const Avatar = styled.div`
    img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }

    svg {
        width: 20px;
        height: 20px;
        color: #312e38;
    }
    &:hover {
        background: ${shade(0.2, '#312e38')};
    }
`;
