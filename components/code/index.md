---
title: 代码编辑器
category: 组件
order: 99 
sidebar: doc
---

> 如果你不是通过webpack引入该该组件，你需要定义`__webpack_public_path__`来指定`worker`的加载路径，
> 例如：`__webpack__public_path__ = '/dist/'`

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 组件的值，可通过`v-model`双向绑定 | `String` | `''` |
| language | 指定编程语言 | `String` | `javasript` |
| width | 指定宽度，需要带单位 | `String` | `100%` |
| height | 指定高度，需要带单位 | `String` | `100%` |
| theme | 指定主题 | `"vs"` &#124; `"vs-dark"` &#124; `"hc-black"` | `"vs"` |
| readonly | 是否只读 | `Boolean` | `false` |
| loading | 是否正在加载 | `Boolean` | `false` |
| options | 其它可选的配置，会传给`monaco.editor.create()`方法，可选值参考[options](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditorconstructionoptions.html) | `Object` | `{}` |

> 例如：通过`options`可以隐藏右侧代码的缩影(minimap): `options = {minimap: {enabled: false}}`

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| ready | 组件加载并实例化完成触发 | `Code` |
