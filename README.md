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
3.  For e


