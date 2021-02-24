import styled from 'styled-components';

export const PageCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-self: center;
  gap: 10px;
  background: #ffffff;
  border-radius: 10px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 25px;

  text-align: center;
  letter-spacing: 0.004em;

  color: #000000;
  padding: 30px;
  margin: 100px 0 100px 0;
  @media (max-width: 768px) {
    margin: 10px 0 10px 0;
    padding: 10px;
    width: 90%;
  }
`;

export const PageTitle = styled.div`
  font-weight: 700;
`;

export const PageText = styled.div`
  font-weight: 500;
`;
