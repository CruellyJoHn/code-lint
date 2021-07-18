### 什么是codelint？

用各种lint工具对项目的各种文件（ts，js，vue，css，json等）进行格式的校验和风格校验。

### 有什么用处？

- 统一了团队的编码风格，方便阅读代码和维护代码
- 提高代码质量，解决隐藏的代码问题

### codelint用了哪些工具lint？

- eslint；用于对代码质量为主，代码风格为辅的校验（包含vue，js，ts，json等文件）
- stylelint；用于对样式文件的校验
- markdownlint；用于对markdown书写风格的校验
- commitlint；用于对commit提交的信息进行校验
- ls-lint；用于对目录，文件等名称命名规范的校验
- prettier；用于对于代码风格以及格式化的统一；

### 什么是husky和lint-staged？

- husky是用git提交项目时，各个生命周期的回调
- lint-staged；获取git add区域的所有文件；并可以对这些文件做各种处理

> 两者搭配，可以实现在项目提交代码时，通过husky提供的pre-commit，commit-msg钩子，执行各种lint工具校验文件，校验没通过则不允许提交代码
