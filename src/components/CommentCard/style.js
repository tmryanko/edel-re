import styled from 'styled-components';

export const CardContainer = styled.div`
  font-size: 20px;

  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  height: 300px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background: #023047;
  @media (max-width: 768px) {
    height: 280px;
    padding: 10px;
    margin: 5px;
    font-size: 16px;
  }
`;
export const CardName = styled.div`
  margin-top: auto;
  color: white;
`;
export const CardText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-family: Roboto;
  letter-spacing: 0.2px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 768px) {
    line-height: 22px;
  }
`;
