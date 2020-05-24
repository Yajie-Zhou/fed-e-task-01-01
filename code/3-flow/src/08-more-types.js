
// @flow

// 特殊类型

// 字面量类型，a只能存放该字符串的值；一般不会单独使用，会配合联合类型的用法去组合几个特定的值
const a: 'foo' = 'foo'
// 联合类型
const type: 'success' | 'warning' | 'danger' = 'success'
// 或类型
const b: string | number = 'string' // 100

// 使用type关键词声明类型,表示多个类型联合后的结果
type StringOrNumber = string | Number
const c: StringOrNumber = 'string' // 100

// maybe 类型
const gender: ?number = undefined // null 100，表示除了支持数字类型，也可以为undefined和null
const gender: number | undefined | null = undefined // null 100