import { NavLink as BaseNavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Li } from './Home.styled';

const NavLink = styled(BaseNavLink)`
  position: relative;
  text-decoration: none;
  color: #714242;
  transition: color 0.3s ease, font-size 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #ffffff;
    cursor: pointer;
    font-size: 18px;
    transform: translateY(-3px);
  }
`;

const Home = ({ movies, isMoviesPage }) => {
  const str = isMoviesPage ? '' : 'movies/'
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(el => {
          return (
            <Li key={el.id}>
              <NavLink to={`${str}${el.id}`} state={{ from: location }} >            
                {el.title}
              </NavLink>
            </Li>
          );
        })}
    </ul>
  );
};

export default Home;
