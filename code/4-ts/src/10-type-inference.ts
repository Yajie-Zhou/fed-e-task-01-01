// 隐式类型推断

export {}

let age = 18 // number
// age = 'string' // 报错

let foo // any
foo = 100
foo = 'string'

// 建议为每个变量添加明确的类型