import { createTheme } from '@mui/material/styles'; // import the createTheme from MUI
// const styles = require('.zesty/styleVariables') || {}; // assigning the styleVariables.json to the "styles" variable

export default function ZestyStyles(content) {
  const zestySettingsTheme = content;
  //   const zestySettingsTheme = createTheme({
  //     palette: {
  //       primary: {
  //         main: `${styles['brand-primary'] || '#42a5f5'}`,
  //       },
  //       secondary: {
  //         main: `${styles['brand-secondary'] || '#ab47bc'}`,
  //       },
  //       success: {
  //         main: `${styles['brand-success'] || '#388e3c'}`,
  //       },
  //       info: {
  //         main: `${styles['brand-info'] || '#0288d1'}`,
  //       },
  //       warning: {
  //         main: `${styles['brand-warning'] || '#f57c00'}`,
  //       },
  //       error: {
  //         main: `${styles['brand-danger'] || '#d32f2f'}`,
  //       },
  //     },

  //     typography: {
  //       // Header styles
  //       fontSize: headerFontSize || 12,
  //     },
  //   });

  return ZestyStyles;
}
