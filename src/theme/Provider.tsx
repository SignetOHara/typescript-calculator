import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { myTheme } from './myTheme';
import { Reset } from './cssReset';

export const Provider: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={myTheme}>
    <Reset />
    <Normalize />
    {children}
  </ThemeProvider>
);
