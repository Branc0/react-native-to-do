import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar/>
      <Home />
    </ThemeProvider>
  );
}

