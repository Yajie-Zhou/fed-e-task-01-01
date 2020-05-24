// Object 类型

export {} // 确保和其他示例没有成员冲突

// TypeScript中的Object 类型，泛指所有非原始类型，对象、数组、函数
const foo: object = function(){} //{} // [] 
// 普通的对象类型， 赋值的对象结构必须和类型结构完全一致，多少都不可以；专业方式：接口
const obj: { foo: number, bar: string } = { foo: 123, bar: 'string' }
