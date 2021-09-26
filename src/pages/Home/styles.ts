import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: #e5e5e5;
  margin: 0;
  padding: 24px 31px;

  h1 {
    color: #1d2c4b;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.025em;
    padding-bottom: 31px;
  }
`;

export const ContentHeaderCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const ContainerGraphic = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  padding: 24px 0;
  gap: 28px;
`;

export const ContentTestDriver = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 0 24px;
  gap: 28px;
`;
