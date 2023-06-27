import { useState } from 'react';

import { COLORS, DARK_COLORS } from '../../constants/colors';
import { Theme } from '../types/theme';

export const useTheme = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK);
  };

  const themeColors = theme === Theme.LIGHT ? COLORS : DARK_COLORS;

  return { colors: themeColors, currentTheme: theme, toggleTheme };
};
