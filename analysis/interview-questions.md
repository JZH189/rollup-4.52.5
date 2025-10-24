# Rollup 面试问题清单与答案

## 基础概念

### 1. 什么是 Rollup？

**问题：** 请解释 Rollup 是什么以及它的主要用途

**答案：** Rollup 是一个 JavaScript 模块打包工具，专注于使用 ES 模块（ESM）标准将小代码片段编译成更大、更复杂的库或应用程序。它的主要用途包括：

- 将多个 ES 模块打包成单个文件
- 通过 Tree Shaking 移除未使用的代码
- 支持多种输出格式（IIFE、CommonJS、UMD、ESM）
- 提供插件机制扩展功能

**问题：** Rollup 与 Webpack、Parcel 等其他打包工具相比有什么优势和劣势？

**答案：** 优势：

- Tree Shaking 效果更好，生成的包更小
- 更适合构建库，而不是应用程序
- 配置相对简单
- 更好的 ES 模块支持

劣势：

- 代码分割功能不如 Webpack 强大
- 插件生态不如 Webpack 丰富
- 对于复杂应用的构建支持不如 Webpack

### 2. ES 模块 vs CommonJS

**问题：** 解释 ES 模块和 CommonJS 模块的区别

**答案：** ES 模块：

- 静态导入/导出语法（import/export）
- 编译时确定依赖关系
- 支持 Tree Shaking
- 浏览器原生支持

CommonJS：

- 动态 require/module.exports 语法
- 运行时确定依赖关系
- 不支持 Tree Shaking
- Node.js 原生支持

**问题：** 为什么 Rollup 更适合处理 ES 模块？

**答案：** Rollup 基于静态分析，可以更好地理解 ES 模块的导入/导出关系，从而实现更有效的 Tree Shaking 和优化。

### 3. Tree Shaking

**问题：** 什么是 Tree Shaking？它是如何工作的？

**答案：** Tree Shaking 是一种通过静态分析移除未使用代码的技术。Rollup 通过分析 import/export 语句，标记哪些导出被实际使用，然后移除未被标记的代码。

**问题：** Tree Shaking 的前提条件是什么？

**答案：**

- 使用 ES 模块语法
- 代码没有副作用或正确标记副作用
- 构建工具支持静态分析

**问题：** 什么情况下 Tree Shaking 可能不会生效？

**答案：**

- 使用 CommonJS 语法
- 代码有副作用且未正确标记
- 使用动态导入
- 第三方库标记为有副作用

## 核心功能

### 4. 构建过程

**问题：** 请描述 Rollup 的构建过程

**答案：** Rollup 构建过程包括：

1. 解析入口点和依赖图
2. 加载和转换模块
3. 静态分析和 Tree Shaking
4. 代码生成和输出

**问题：** Rollup 构建阶段和生成阶段分别做了什么？

**答案：** 构建阶段：

- 解析模块依赖图
- 加载和转换代码
- 执行 Tree Shaking

生成阶段：

- 代码生成
- 格式化输出
- 写入文件

### 5. 插件系统

**问题：** Rollup 的插件系统是如何工作的？

**答案：** Rollup 插件系统基于钩子函数，插件可以在构建过程的不同阶段执行特定操作，如解析模块、加载代码、转换代码等。

**问题：** 请列举几个常用的 Rollup 插件及其作用

**答案：**

- @rollup/plugin-node-resolve: 解析 node_modules 中的模块
- @rollup/plugin-commonjs: 转换 CommonJS 模块为 ES 模块
- @rollup/plugin-babel: 使用 Babel 转换代码
- @rollup/plugin-typescript: 支持 TypeScript
- @rollup/plugin-json: 导入 JSON 文件

**问题：** 如何编写一个自定义的 Rollup 插件？

**答案：** 自定义插件是一个对象，包含 name 属性和各种钩子函数：

```javascript
export default function myPlugin(options = {}) {
	return {
		name: 'my-plugin',
		resolveId(source, importer) {
			// 解析模块 ID
		},
		load(id) {
			// 加载模块内容
		},
		transform(code, id) {
			// 转换代码
		}
	};
}
```

### 6. 输出格式

**问题：** Rollup 支持哪些输出格式？

**答案：**

- es (ESM): ES 模块格式
- cjs (CommonJS): CommonJS 格式
- iife (Immediately Invoked Function Expression): 自执行函数
- umd (Universal Module Definition): 通用模块定义
- system: SystemJS 格式

**问题：** 什么时候使用 IIFE、CommonJS、UMD 或 ESM 格式？

**答案：**

- ESM: 现代浏览器和 Node.js 环境
- CommonJS: Node.js 环境
- IIFE: 直接在浏览器中使用
- UMD: 兼容多种环境

## 高级概念

### 7. 代码分割

**问题：** Rollup 如何处理代码分割？

**答案：** Rollup 通过动态导入和配置选项（如 manualChunks）实现代码分割，将代码拆分成多个 bundle。

**问题：** 什么是动态导入？Rollup 是如何处理动态导入的？

**答案：** 动态导入是 ES2020 特性，允许在运行时加载模块。Rollup 会为动态导入创建单独的 chunk。

### 8. 性能优化

**问题：** Rollup 有哪些性能优化策略？

**答案：**

- 使用缓存
- 并行处理
- 原生模块加速
- 合理配置 Tree Shaking

**问题：** 如何优化 Rollup 的构建速度？

**答案：**

- 使用缓存
- 减少插件数量
- 避免不必要的转换
- 使用并行构建

### 9. 配置文件

**问题：** 请解释 rollup.config.js 中常见配置项的作用

**答案：**

- input: 入口点
- output: 输出配置
- plugins: 使用的插件
- external: 外部依赖

**问题：** 如何为不同的环境（开发/生产）配置不同的 Rollup 配置？

**答案：** 可以导出一个函数或数组，根据环境变量返回不同的配置。

## 实际应用

### 10. 库开发

**问题：** 为什么 Rollup 特别适合用于库的开发？

**答案：** Rollup 专注于 ES 模块，Tree Shaking 效果好，生成的库体积小，适合发布到 npm。

**问题：** 如何使用 Rollup 构建一个可以在多种环境中使用的库？

**答案：** 配置多个输出格式，使用 pkg.module 和 pkg.main 字段。

### 11. 故障排除

**问题：** 如果遇到打包后的代码无法正常运行，你会如何排查问题？

**答案：**

- 检查控制台错误
- 查看生成的代码
- 验证配置选项
- 检查插件兼容性

**问题：** 如何调试 Rollup 插件？

**答案：** 使用调试器，在插件钩子函数中设置断点。

## 源码理解

### 12. 架构设计

**问题：** 请描述 Rollup 的整体架构

**答案：** Rollup 采用分层架构，包括 CLI 层、核心引擎层、插件系统层和原生加速层。

**问题：** Graph、Module、Bundle、Chunk 在 Rollup 中分别代表什么？

**答案：**

- Graph: 依赖图
- Module: 单个模块
- Bundle: 打包结果
- Chunk: 代码块

### 13. 核心模块

**问题：** ModuleLoader 的作用是什么？

**答案：** ModuleLoader 负责加载和解析模块，构建依赖图。

**问题：** PluginDriver 是如何管理插件的？

**答案：** PluginDriver 管理插件生命周期，调用插件钩子函数。

### 14. AST 处理

**问题：** Rollup 是如何解析和处理 AST 的？

**答案：** 使用自定义解析器生成 AST，通过遍历 AST 实现代码分析和转换。

**问题：** 为什么 Rollup 需要自定义的 AST 处理逻辑？

**答案：** 为了更好地支持 Tree Shaking 和代码优化。

## 技术深度

### 15. 依赖解析

**问题：** Rollup 是如何解析模块依赖的？

**答案：** 通过 resolveId 钩子解析模块 ID，递归解析依赖关系。

**问题：** 什么是循环依赖？Rollup 是如何处理循环依赖的？

**答案：** 循环依赖是模块相互引用。Rollup 会检测并警告循环依赖。

### 16. 副作用处理

**问题：** 什么是模块的副作用？

**答案：** 副作用是模块在导入时执行的代码，不仅仅是导出内容。

**问题：** 如何告诉 Rollup 某个模块有副作用？

**答案：** 在 package.json 中使用 sideEffects 字段标记。

### 17. 原生模块

**问题：** Rollup 为什么要使用 Rust 编写的原生模块？

**答案：** 提高性能，特别是在 AST 解析和代码生成方面。

**问题：** N-API 和 WebAssembly 在 Rollup 中起什么作用？

**答案：** 提供跨平台的原生性能加速。

## 场景应用

### 18. 实际项目

**问题：** 在一个大型项目中，你会如何配置 Rollup？

**答案：** 根据项目需求配置输入输出、插件、代码分割等。

### 19. 与其他工具集成

**问题：** 如何将 Rollup 与 Babel、TypeScript 等工具集成？

**答案：** 使用对应的 Rollup 插件。

**问题：** Rollup 如何与开发服务器配合使用？

**答案：** 使用 rollup-plugin-serve 或其他开发服务器插件。

### 20. 监听模式

**问题：** Rollup 的监听模式是如何实现的？

**答案：** 监听文件变化，重新构建变更的模块。

**问题：** 监听模式下如何优化性能？

**答案：** 使用缓存，只重新构建变更的部分。

## 编程题

### 21. 代码实现

**问题：** 请实现一个简单的 Rollup 插件，用于在打包过程中替换代码中的特定字符串

```javascript
// 请实现一个简单的 Rollup 插件，用于在打包过程中替换代码中的特定字符串
function stringReplacePlugin(options) {
	// 请在此处实现插件逻辑
	return {
		name: 'string-replace',
		transform(code, id) {
			if (!options || !options.include || !id.match(options.include)) {
				return null;
			}

			let result = code;
			if (options.patterns) {
				options.patterns.forEach(pattern => {
					result = result.replace(pattern.find, pattern.replace);
				});
			}

			return {
				code: result,
				map: null
			};
		}
	};
}
```

### 22. 配置优化

**问题：** 请优化以下 Rollup 配置以提高构建性能和输出质量

```javascript
// 请优化以下 Rollup 配置以提高构建性能和输出质量
export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	},
	plugins: [
		resolve(),
		commonjs(),
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**'
		})
	],
	external: ['lodash']
};
```

## 开放性问题

### 23. 设计思路

**问题：** 如果让你重新设计 Rollup，你会做哪些改进？

**答案：** 可能的改进包括更好的代码分割、更丰富的插件生态、更友好的错误提示等。

**问题：** Rollup 在未来可能会面临哪些挑战？

**答案：** 与新兴打包工具的竞争、对新 JavaScript 特性的支持、性能优化等。

### 24. 最佳实践

**问题：** 使用 Rollup 时有哪些最佳实践？

**答案：**

- 合理使用 Tree Shaking
- 选择合适的插件
- 配置外部依赖
- 使用缓存提高构建速度

**问题：** 如何确保打包后的代码在各种环境中都能正常运行？

**答案：** 配置多种输出格式，正确设置 external，测试不同环境。

### 25. 技术选型

**问题：** 在什么情况下你会选择 Rollup 而不是其他打包工具？

**答案：** 构建库、需要更好的 Tree Shaking、项目相对简单时。

**问题：** 你会如何向团队推荐使用 Rollup？

**答案：** 从项目需求出发，展示 Rollup 的优势，提供迁移方案。
