module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        'plugin:vue/recommended',
        // "plugin:prettier/recommended",
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    rules: {
        "strict": 0,
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/html-indent': ['error', 2],
        "indent": ["error", 2],
        "comma-dangle": ["error", "always-multiline"],
        "vue/html-self-closing": ["never"],
        "vue/require-prop-types": ["never"],
        "vue/max-attributes-per-line": ["never"],
        "vue/require-default-prop": ["never"],
        // "prettier/prettier": ["error", {
        //     "trailingComma": "all",
        //     "singleQuote": true
        // }]
    }
}