// 类型断言

export {}

// 假定这个 nums 来自一个明确的接口
const nums = [110, 120, 119, 112]
const res = nums.find(i => i > 0) // number | undefined
// const square = res * res // res 报错 

// 类型断言
const num1 = res as number
const num2 = <number>res // JSX下不能使用