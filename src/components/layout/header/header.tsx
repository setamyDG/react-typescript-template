import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader, Title } from './header.styled';

type Ref = HTMLDivElement;
type HeaderProps = {
  ref: HTMLDivElement;
};

const Header = forwardRef<Ref, HeaderProps>((_, ref) => (
  <StyledHeader ref={ref}>
    <NavLink to='/'>
      <p>logo</p>
    </NavLink>
    <Title>Header Title</Title>
  </StyledHeader>
));

Header.displayName = 'Header';

export default Header;
