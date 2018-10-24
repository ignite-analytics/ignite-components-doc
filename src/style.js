import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {NavBarItem, Row} from "ignite-components";

export const StyledLogo = styled.img`
  height: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  
  &.active ${NavBarItem} {
    opacity: 1;
  }
`;

export const FillRow = styled(Row)`
  min-height: 100vh;
`;