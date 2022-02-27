# eslint-plugin-custom-lint-rules

custom lint rules that I wrote

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-custom-lint-rules`:

```sh
npm install eslint-plugin-custom-lint-rules --save-dev
```

## Usage

Add `custom-lint-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "custom-lint-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "custom-lint-rules/enforce-fluentui-react-lib": 2
    }
}
```

## Supported Rules

* enforce-fluentui-react-lib


