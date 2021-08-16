import React from 'react';
import styled from 'styled-components';
import ThemeImage from '../components/themeimage';
import { ThemeContext } from './ThemeContext';
import DarkToggle from './DarkToggle';
import DarkIcon from './DarkIcon';
// Setup for Dark Mode Detection //

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      {siteTitle}
      <DarkToggle />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;
console.log(DarkIcon)

export default Header;
