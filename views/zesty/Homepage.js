import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Example from 'components/Example';
import { Typography } from '@mui/material';

export default function Homepage({ content }) {
  //    Getting only the reference name and value of all style variables and assigned it to $styles object
  let styles = {};
  for (const { name: rn, value: val } of content.styleVariables) {
    styles[rn] = val;
  }

  //   Material UI Theme Settings
  const headerFontSize = styles['font-size-base'];
  const zestyThemeStyle = createTheme({
    palette: {
      primary: {
        main: `${styles['brand-primary'] || '#42a5f5'}`,
      },
      secondary: {
        main: `${styles['brand-secondary'] || '#ab47bc'}`,
      },
      success: {
        main: `${styles['brand-success'] || '#388e3c'}`,
      },
      info: {
        main: `${styles['brand-info'] || '#0288d1'}`,
      },
      warning: {
        main: `${styles['brand-warning'] || '#f57c00'}`,
      },
      error: {
        main: `${styles['brand-danger'] || '#d32f2f'}`,
      },
    },

    typography: {
      // Header styles
      fontSize: Number(headerFontSize) || 12,
    },
  });
  return (
    <>
      <ThemeProvider theme={zestyThemeStyle}>
        <Typography
          variant="h3"
          variantMapping={{
            h1: 'h1',
          }}
          color="warning.main"
          align="center"
          fontWeight={700}
        >
          {content.header_title}
        </Typography>
        <Example content={content} />
      </ThemeProvider>
    </>
  );
}
