import styled from 'styled-components';

export const Img = styled.img`
  max-width: 182px;
  max-height: 200px;
  display: block;
  border-radius: 15px;
  margin-left: 20px;
`;

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
  list-style-type: none;
`;

export const ActorListItem = styled.li`
  padding: 3px;
  max-width: 100%;
  width: 220px;
  height: 300px;
  text-decoration: none;
  border: none;
  transform: scale(1);
  border-radius: 8px;

  background-color: transparent;

  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
  transition: box-shadow 250ms linear;


  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }
`;

export const ActorsName = styled.p`
  max-width: 200px;
  color: #707c69
`;





