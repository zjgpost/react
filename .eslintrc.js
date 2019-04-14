module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules":true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser":"babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
        'no-console': 'off',
        "strict": 0,
        "valid-jsdoc": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/no-unused-state": 1,
        "react/props-types": 0,
        "react/prefer-es6-class": [2, "always"],
        "react/destructuring-assignment": [1, "always"],
        "react/jsx-filename-extension": [1, { "extensions": [".js",".jsx"] }]
    }
};