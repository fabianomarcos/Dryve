import styled from 'styled-components';
import { shade } from 'polished';
import { white, primary_blu_5, secondary_blu_5 } from '../../styles/variables';

export const Container = styled.div`
    background: ${white};
    border-bottom: 0.2px solid ${shade(0.2, white)};

    header {
        min-width: 100vw;
        height: 72px;
        margin: 0;
        padding: 24px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: ${secondary_blu_5};
        }

        section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            svg:first-child {
                border: 1px solid ${primary_blu_5};
                padding: 2px;
                border-radius: 50%;
            }

            svg + svg {
                color: ${secondary_blu_5};
                border: 0;
            }
        }

        svg {
            color: ${primary_blu_5};
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
