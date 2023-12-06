

import { StyledHeader, StyledLi, StyledNav, StyledUl } from './Header.styled';
import { NavLink as BaseNavLink } from "react-router-dom";
import styled from 'styled-components';
const NavLink = styled(BaseNavLink)`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* padding: 0 15px; */
  list-style-type: none;
  text-decoration: none;
  color: #8b9c94;
  background-color: #635656;
  padding: 4px;
  transition: background-color 0.3s, color 0.3s;
  border-radius:5px;

  &:hover {
    background-color: #8c7c7c;
    color: #fff;
  }

  &.active {
    color: #0afd5b;
    background-color: #8c7c7c;
  }
`;
const Header = () => {
    return (
      <StyledHeader>
        <StyledNav>
          <StyledUl>
            <StyledLi>
              <NavLink to="/" >Home</NavLink>
            </StyledLi>
            <StyledLi>
              <NavLink to="/movies" >Movies</NavLink>
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </StyledHeader>
    );
  };

export default Header;
