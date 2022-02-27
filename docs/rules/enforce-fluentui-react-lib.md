# enforce import only from lib when using fluentui/react (enforce-fluentui-react-lib)

## Rule Details

This rule aims to enforce import only from lib when using fluentui/react

Examples of **incorrect** code for this rule:

```js

import defaultA, { nameA } from '@fluentui/react';
import defaultB, { nameB } from '@fluentui/react/';
import defaultC, { nameC } from '@fluentui/react/Button';
import defaultD, { nameD } from '@fluentui/react/Button/';
```

Examples of **correct** code for this rule:

```js

import defaultA, { nameA } from '@fluentui/react/lib';
import defaultB, { nameB } from '@fluentui/react/lib/';
import defaultC, { nameC } from '@fluentui/react/lib/Button';
import defaultD, { nameD } from '@fluentui/react/lib/Button/';

```

## When Not To Use It

If you are not using fluentui in your code, or if you are using it but your product is part of office.
## Further Reading

https://github.com/Azure/portaldocs/blob/1fe62c54c1e87aadade061bab70e810efb22713a/portal-sdk/generated/react-index.md#fluentui-libraries