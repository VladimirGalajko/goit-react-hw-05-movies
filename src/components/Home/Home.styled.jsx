import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px; 
  width: 500px;
  padding: 0 20px; 
  margin-bottom: 10px; 
  background-color: #d5d5d5;
  border: 2px solid #a1a1a1; 
  border-radius: 30px; 
  color: #fff; 
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease; 
  /* cursor: pointer; */

  &:hover {
    background-color: #a8a4a4; /* Цвет при наведении */
  }
`;