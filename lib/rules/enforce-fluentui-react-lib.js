/**
 * @fileoverview enforce import only from lib when using fluentui/react
 * @author Doron Kilzi
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
/**
 * @type {import('eslint').Rule.RuleModule}
 */
 module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'enforce import only from lib when using fluentui',
      category: 'Possible Errors',
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code',
    schema: [], // no options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    const FLUENTUI_REACT = '@fluentui/react';
    const FLUENTUI_REACT_LIB = '@fluentui/react/lib';
    return {
      // visitor functions for different types of nodes
      ImportDeclaration(node) {
        const fromWhere = node.source.value;
        if (fromWhere.startsWith(FLUENTUI_REACT)) {
          if(fromWhere.startsWith(FLUENTUI_REACT_LIB)){
            return;
          }
          // const expected = fromWhere.replace(FLUENTUI_REACT, FLUENTUI_REACT_LIB);
          context.report({
            node,
            message: `import from ${FLUENTUI_REACT} is not allowed. Use ${FLUENTUI_REACT_LIB} instead.`,
            // fix: function(fixer) {
            //   return fixer.replaceText(node, expected);
            // }
          });
        }
      }
    };
  },
};
