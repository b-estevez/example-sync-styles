# Example Sync Styles

## This is an example repo where the [Instance Styles](https://zesty.org/services/manager-ui/settings/less-variables) is sync to [Zesty Starter Pack](https://github.com/zesty-io/nextjs-starter).

ℹ️ INFO:
- The Instance linked in this repository is using the [Module Mui Styles](https://github.com/zesty-io/module-mui-styles) 
- This package is using `Web-engine.json` to fecth the style variables.
   - To install the package:
   - ```
     npm install @zesty-io/webengine-json
     ```


### ⚙️ Implementation :

1. In the `lib/zesty/fetchPage.js`, add the following :

```javascript
import { styles } from '@zesty-io/webengine-json';
import ZestyConfig from '/zesty.config.json';

// inside fetchZestyPage function
export async function fetchZestyPage(url, getNavigation = true) {

// Append this code
 data.styleVariables = await styles(
    ZestyConfig.stage,
    ZestyConfig.stage_password,
  );


}
```

2.  Once the code above is added in the `lib/zesty/fetchPage.js`, stylevariables is now appended in the `content` object.
3.  Therefore the `styleVariables` can be used anywhere in `view/zesty` files which can be accessed as `content.styleVariables`
4.  Example in using `styleVariables` in **MUI createTheme**:

```javascript

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

// Theme Styles will only apply to the components inside <ThemeProvider> component
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


```


