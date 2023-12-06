import styled from 'styled-components';

export const Img = styled.img`
  max-width: 182px;
  background: #424242;
  border-radius: 15px;
  margin-left: 20px;
`;
export const Div = styled.div`
display: flex;

span {
  font-weight:  bold;
}
ul {
  margin-left: 20px;
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      max-width:500px;
      p {
        margin: 0;
      }
    }
  }
`;

export const Label = styled.span`
margin-left:30px;
`;

export const ButtonGoBack = styled.button`
  margin: 10px 10px;
  border-radius: 5px;
  border: none;
  position: relative;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #5e6963;
  color:#ccdbcf;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 5px;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-right-color: #949fb4;
    transform: translateY(-50%);
  }

  &:hover {
    background-color: #49524d;
  }

`;

export const AdditionalInfoContainer = styled.div`
margin-left:10px;
  margin-top: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;

      a {
        text-decoration: none;
        color: #ada7a7;
        font-weight: bold;

        &:hover {
          color: #000000;
        }
        &.active {
          color: #000000;
        }
      }
    }
  }
`;