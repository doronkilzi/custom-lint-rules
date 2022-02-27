/**
 * @fileoverview enforce import only from lib when using fluentui/react
 * @author Doron Kilzi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/enforce-fluentui-react-lib"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
});ruleTester.run("enforce-fluentui-react-lib", rule, {
  valid: [
    "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/lib';",
    "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/lib/';",
    "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/lib/Button';",
    "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/lib/Button/';",
    "import defaultA, { DefaultButton, IButtonProps } from '@someOtherNodeModules/blaBla';",
  ],

  invalid: [
    {
      code: "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react';",
      errors: [
        {
          message:
            'import from @fluentui/react is not allowed. Use @fluentui/react/lib instead.',
          type: 'ImportDeclaration',
          // output: "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/lib';"
        },
      ],
    },
    {
      code: "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/Button';",
      errors: [
        {
          message:
            'import from @fluentui/react is not allowed. Use @fluentui/react/lib instead.',
          type: 'ImportDeclaration',
          // output: "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/lib/Button';",
        },
      ],
    },
    {
      code: "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/';",
      errors: [
        {
          message:
            'import from @fluentui/react is not allowed. Use @fluentui/react/lib instead.',
          type: 'ImportDeclaration',
          // output: "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/lib';",
        },
      ],
    },
    {
      code: "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/Button/';",
      errors: [
        {
          message:
            'import from @fluentui/react is not allowed. Use @fluentui/react/lib instead.',
          type: 'ImportDeclaration',
          // output: "import defaultA, { DefaultButton, IButtonProps } from '@fluentui/react/lib/Button/';",
        },
      ],
    },
  ],
});
