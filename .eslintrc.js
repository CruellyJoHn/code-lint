module.exports = {
    root: true, // 设置当前所在目录为根目录，方便eslint找到该配置文件

    // 配置什么环境下适用该eslint的校验
    env: {
        node: true,
        browser: true,
    },
    parser: 'vue-eslint-parser', // 代码解析器

    // 用于传给解析器的配置
    parserOptions: {
        ecmaVersion: 2020, // js的特性版本号
        sourceType: 'module', // 使用esm
    },

    // 扩展项：规则集合
    extends: [
        'eslint:recommended', // 对js文本进行校验
        'plugin:vue/recommended', // 对vue文本进行校验
        'prettier', // 解决prettier和eslint风格校验的冲突
    ],

    // 插件：使用该插件自定义的规则
    plugins: ['vue', 'prettier'],

    // 配置规则。没有配置则使用默认的
    // 以下是配置eslint和vue自带的部分规则
    // 具体规则配置可查看eslint和eslint-plugin-vue官方介绍
    rules: {
        // prettier
        'prettier/prettier': 'error',

        // eslint 自带规则
        'no-console': 'error',
        'no-alert': 'error',
        'no-else-return': 'error',
        curly: ['error', 'all'],
        'default-case': 'error',

        // Stylistic
        'brace-style': 'error',
        camelcase: 'error',
        'comma-style': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': 'error',
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'prefer-const': ['error', { destructuring: 'all' }],

        // vue
        'vue/attribute-hyphenation': 'off',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/max-attributes-per-line': 'off',
        'vue/require-default-prop': 'error',
        'vue/require-explicit-emits': 'error',
    },
};
