module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ['plugin:react/recommended'],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "indent": ["error", 4, {"SwitchCase": 1}],
        "max-len": [2, 110],
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "off",
        "no-tabs": 0,
        "max-params": [2, 3],
        "no-var": "error",
        "no-multi-spaces": "error",
        "require-jsdoc": "off",
        "no-trailing-spaces": "off",
        "operator-linebreak": "off",
    },
    "overrides": [
        {
            "files": ["**/*.tsx"],
            "rules": {
                "react/prop-types": "off"
            }
        }
    ]
};
