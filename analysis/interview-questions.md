# Rollup 面试问题清单

## 基础概念

### 1. 什么是 Rollup？

- 请解释 Rollup 是什么以及它的主要用途
- Rollup 与 Webpack、Parcel 等其他打包工具相比有什么优势和劣势？

### 2. ES 模块 vs CommonJS

- 解释 ES 模块和 CommonJS 模块的区别
- 为什么 Rollup 更适合处理 ES 模块？

### 3. Tree Shaking

- 什么是 Tree Shaking？它是如何工作的？
- Tree Shaking 的前提条件是什么？
- 什么情况下 Tree Shaking 可能不会生效？

## 核心功能

### 4. 构建过程

- 请描述 Rollup 的构建过程
- Rollup 构建阶段和生成阶段分别做了什么？

### 5. 插件系统

- Rollup 的插件系统是如何工作的？
- 请列举几个常用的 Rollup 插件及其作用
- 如何编写一个自定义的 Rollup 插件？

### 6. 输出格式

- Rollup 支持哪些输出格式？
- 什么时候使用 IIFE、CommonJS、UMD 或 ESM 格式？

## 高级概念

### 7. 代码分割

- Rollup 如何处理代码分割？
- 什么是动态导入？Rollup 是如何处理动态导入的？

### 8. 性能优化

- Rollup 有哪些性能优化策略？
- 如何优化 Rollup 的构建速度？

### 9. 配置文件

- 请解释 rollup.config.js 中常见配置项的作用
- 如何为不同的环境（开发/生产）配置不同的 Rollup 配置？

## 实际应用

### 10. 库开发

- 为什么 Rollup 特别适合用于库的开发？
- 如何使用 Rollup 构建一个可以在多种环境中使用的库？

### 11. 故障排除

- 如果遇到打包后的代码无法正常运行，你会如何排查问题？
- 如何调试 Rollup 插件？

## 源码理解

### 12. 架构设计

- 请描述 Rollup 的整体架构
- Graph、Module、Bundle、Chunk 在 Rollup 中分别代表什么？

### 13. 核心模块

- ModuleLoader 的作用是什么？
- PluginDriver 是如何管理插件的？

### 14. AST 处理

- Rollup 是如何解析和处理 AST 的？
- 为什么 Rollup 需要自定义的 AST 处理逻辑？

## 技术深度

### 15. 依赖解析

- Rollup 是如何解析模块依赖的？
- 什么是循环依赖？Rollup 是如何处理循环依赖的？

### 16. 副作用处理

- 什么是模块的副作用？
- 如何告诉 Rollup 某个模块有副作用？

### 17. 原生模块

- Rollup 为什么要使用 Rust 编写的原生模块？
- N-API 和 WebAssembly 在 Rollup 中起什么作用？

## 场景应用

### 18. 实际项目

- 在一个大型项目中，你会如何配置 Rollup？
- 如何处理第三方库的兼容性问题？

### 19. 与其他工具集成

- 如何将 Rollup 与 Babel、TypeScript 等工具集成？
- Rollup 如何与开发服务器配合使用？

### 20. 监听模式

- Rollup 的监听模式是如何实现的？
- 监听模式下如何优化性能？

## 编程题

### 21. 代码实现

```javascript
// 请实现一个简单的 Rollup 插件，用于在打包过程中替换代码中的特定字符串
function stringReplacePlugin(options) {
	// 请在此处实现插件逻辑
}
```

### 22. 配置优化

```javascript
// 请优化以下 Rollup 配置以提高构建性能和输出质量
export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	}
};
```

## 开放性问题

### 23. 设计思路

- 如果让你重新设计 Rollup，你会做哪些改进？
- Rollup 在未来可能会面临哪些挑战？

### 24. 最佳实践

- 使用 Rollup 时有哪些最佳实践？
- 如何确保打包后的代码在各种环境中都能正常运行？

### 25. 技术选型

- 在什么情况下你会选择 Rollup 而不是其他打包工具？
- 你会如何向团队推荐使用 Rollup？
