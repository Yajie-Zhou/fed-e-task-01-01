// @flow

// 对象类型

const obj1: { foo: String, bar: number } = { foo: 'string', bar: 100 }

// 成员可选
const obj1: { foo?: String, bar: number } = { bar: 100 }

// 表示可以添加任意个数的键值对，但键和值都必须是字符串类型
const obj3: { [string]: string } = {}
obj3.key1 = 'value1'
obj3.key2 = 'value2'