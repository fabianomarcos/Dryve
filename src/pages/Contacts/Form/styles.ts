import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 31px 26px 24px 24px;

    h1 {
        width: 100%;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #1d2c4b;
    }

    svg {
        color: #0065ff;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 25px;
`;

export const ContentForm = styled.div`
    width: 100%;
    max-width: 640px;
    background: #ffffff;
    padding: 16px 32px 16px 16px;

    .title {
        color: #1d2c4b;
        border-bottom: 5px solid #efefef;
    }

    form {
        width: 100%;
        padding: 50px 0 0 16px;

        .radio_buttons {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
`;

export const TitleSection = styled.div`
    color: #0065ff;
    font-weight: 600;
    font-size: 16px;
    margin: 24px 0;
`;

export const SmallField = styled.div`
    max-width: 132px;
    margin-bottom: 16px;
`;

export const BigFieldWithSmallField = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    div + div {
        max-width: 132px;
    }
`;

export const EqualSizeFields = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
    width: 100%;

    .smallFields {
        width: 100%;
        gap: 16xp;
        display: flex;
        justify-content: space-between;
        div {
            max-width: 132px;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    button {
        border: 1px solid #cce8fe;

        svg {
            color: #0065ff;
        }
    }

    button + button {
        border: 0;
        margin-top: 53px;
        width: 73px;
    }
`;
