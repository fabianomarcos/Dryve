import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  color: #1d2c4b;
  height: 120px;
  min-width: 260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px 16px 18px;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    font-size: 32px;
  }

  svg {
    color: #0065ff;
  }
`;
