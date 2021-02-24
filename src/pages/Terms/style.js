import styled from 'styled-components';

export const PageCont = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 90%;
  margin: 100px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 50px;
  gap: 20px;
  align-items: flex-start;
  font-family: Roboto;
  font-size: 18px;
  line-height: 25px;
  word-break: break-word;
  letter-spacing: 0.004em;

  color: #000000;
  @media (max-width: 768px) {
    margin: 10px 0 10px 0;
    padding: 10px;
  }
`;

export const PageTitle = styled.div`
  font-weight: bold;
`;

export const PageText = styled.div`
  text-align: start;
`;
