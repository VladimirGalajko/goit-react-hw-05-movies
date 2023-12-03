

import { StyledHeader, StyledLi, StyledNav, StyledUl } from './Header.styled';
import { NavLink as BaseNavLink } from "react-router-dom";
import styled from 'styled-components';
const NavLink = styled(BaseNavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  list-style-type: none;
  text-decoration: none;
  color: black;
  background-color: #635656;
  border: 0.1px solid lightgrey;

  &.active {
    color: #ffffff;
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
              <NavLink to="/movies" >movies</NavLink>
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </StyledHeader>
    );
  };

export default Header;
