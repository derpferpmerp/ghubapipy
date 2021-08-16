import React from 'react';

import { ThemeContext } from './ThemeContext';
import DarkIcon from './DarkIcon';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const [cursor, setCursor] = React.useState('crosshair');


  const changeCursor = () => {
    setCursor(prevState => {
      if(prevState === 'crosshair'){
        return 'pointer';
      }
      return 'crosshair';
    });
  }
  if (!colorMode) {
    return null;
  }
  let ischecked = colorMode !== 'dark';
  return (
    <label>
      <DarkIcon onClick={ev => {
        setColorMode(ischecked ? 'dark' : 'light');
        ischecked = !ischecked;
        changeCursor();
      }} style={{ cursor:'pointer' }}></DarkIcon>
    </label>
  );
};

export default DarkToggle;
