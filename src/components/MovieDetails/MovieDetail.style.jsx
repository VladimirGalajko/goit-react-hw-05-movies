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
  margin-left: 10px;
`;

export const ButtonGoBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;
  margin-bottom: 30px;

  font-size: 15px;
  font-family: inherit;

  background: linear-gradient(
    141.22deg,
    rgb(78, 74, 64) 9.4%,
    rgb(180, 105, 90) 91.91%
  );
  color: #ff1f1f;
  border: none;

  cursor: pointer;

  :hover {
    background-color: #5ae619;

  }
`;


// export const DivBack = styled.div`
//   display: flex;
//   margin-left: 50px;
//   margin-top: 20px;
//   justify-content: center;
//   margin-bottom: 16px;
//   padding: 4px;
//   width: 80px;
//   border: none;
//   border-radius: 8px;
//   font-size: 12px;
//   text-transform: uppercase;
//   text-align: center;
  // background: linear-gradient(
  //   141.22deg,
  //   rgb(78, 74, 64) 9.4%,
  //   rgb(180, 105, 90) 91.91%
  // );
//   box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
//     rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
// `;
