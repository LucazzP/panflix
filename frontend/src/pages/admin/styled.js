import styled from 'styled-components';

export const AdminContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 2%;
  h1 {
    color: #fff;
    font-style: italic;
    margin: 0 0 50px 10px;
    font-weight: 600;
    font-size: 38px;
  }
  h2 {
    color: #fff;
    font-size: 24px;
    margin: 0 0 20px 10px;
  }
  @media (max-width: 768px) {
    & {
      padding: 2% 2%;
    }
  }
`;

export const Actions = styled.div`
  width: 100%;
  height: 300px;
`;

export const Action = styled.div`
  width: 300px;
  height: 300px;
  background: rgba(255, 20, 30, 1);
  border-radius: 15px;
  box-shadow: 0px 0px 12px 0px rgba(255, 20, 30, 1);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 20, 30, 1);
  }
  .icone {
    color: #fff;
    font-size: 140px;
    margin-bottom: 20px;
  }
  p {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
`;
