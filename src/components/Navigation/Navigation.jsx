import { styled } from "styled-components";
import {NavLink} from "react-router-dom";
import logo from "../../icons/logo.svg";
import {req} from "../../methods"
import "./style.css"
import { useState } from "react";

const StyledNavigation = styled.header`
  background-color: #cbbfbf;
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledItems = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledLink = styled(NavLink)`
    color: black;
    text-decoration:none;
    transition:.1s all linear;
    &:hover{
      color: blue;
    }
`;

const Navigation = ({ data }) => {
  const keys = Object.keys(data);
  return (
    <StyledNavigation>
      <StyledLink to="/">
        <img src={logo} alt={logo} />
      </StyledLink>
      <StyledItems>
        {keys.map((el,index) => {
          return <StyledLink key={index} to={`/${el}`}>{`${el.charAt(0).toUpperCase()}${el.slice(1)}`}</StyledLink>;
        })}
      </StyledItems>
    </StyledNavigation>
  );
};

export default Navigation;
