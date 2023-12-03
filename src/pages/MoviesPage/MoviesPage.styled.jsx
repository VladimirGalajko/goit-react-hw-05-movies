import styled from 'styled-components';


export const Div = styled.div`
  position: relative;
  margin-bottom: 40px;
  justify-content: center;
`;
export const Form = styled.form`
  margin-top: 10px;
  position: relative;
  margin-bottom: 40px;
  justify-content: center;
`;
export const Label = styled.label`
  position: relative;
  margin-bottom: 40px;
  margin-left: 10px;
  justify-content: center;
`;
export const Input = styled.input`
  padding-left: 24px;
  width: 400px;
  height: 44px;
  border-radius: 100px;
  border: 1px solid #3f3939;
  opacity: 0.3;
`;

export const Button = styled.button`
  position: absolute;
  margin-left: -126px;
  padding: 15px 40px;
  border-radius: 100px;
  background: #3f3939;
  border: none;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.56px;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #555;
    cursor: pointer;
  }

  &:active {
    background: #2c2a2a;
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
