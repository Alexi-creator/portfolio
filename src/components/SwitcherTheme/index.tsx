"use client";

import React, { useContext } from 'react';

import { Moon } from '../../icons/Moon';
import { Sun } from '../../icons/Sun';
import { ThemeContext } from '../../providers/ThemeProvider/context';

export const SwitcherTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-6 h-6 cursor-pointer" onClick={toggleTheme}>
      {isDark ? <Sun /> : <Moon />}
    </div>
  );
};
