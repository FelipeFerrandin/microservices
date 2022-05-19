module.exports = {
    "env": {
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": "off",
        "class-methods-use-this": "off",
        "@typescript-eslint/camelcase": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "semi": ["warn", "never"],
        "eqeqeq": ["error", "smart"]
    }
}