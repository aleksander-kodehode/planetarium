import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../devices";
export const Nav = styled.nav`
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transition: font-size 300ms ease;
  @media ${devices.laptop} {
    font-size: 1.1rem;
  }
  @media ${devices.tablet} {
    height: fit-content;
    font-size: 2rem;
    flex-direction: column;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  @media ${devices.tablet} {
    flex-direction: column;
  }
  & li {
    height: 100%;
    margin-right: 0.625rem;
  }
  & li:last-child {
    margin-right: 0;
  }
  & li:after {
    content: "";
    display: block;
    border-bottom: solid 3px ${(props) => props.theme.colors.nav_link_hover};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  & li:hover:after {
    transform: scaleX(1);
  }
`;
export const NavListMain = styled(NavList)`
  min-width: 50%;
  justify-content: space-around;
  @media ${devices.tablet} {
    min-width: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const NavItems = styled(NavLink)`
  font-family: ${(props) => props.theme.fonts.header}, sans-serif;
  background: brown;
  color: white;
  height: 99%;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 250ms ease-in;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.nav_link_hover};
  }
`;
