import styled from 'styled-components';

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Li = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const H3 = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;

  span {    
    color: #935858;
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;