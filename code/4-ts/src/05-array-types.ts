// 数组类型 和 flow一致


const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 2, 3]

// ... 操作符接收任意个数的参数
function sum(...args: number[]) {
    // 判断是不是每个成员都是数字 

    // prev - 上一次计算的结果 current - 本次循环的当前值  0 - 初始值
    return args.reduce((prev, current) => prev + current, 0)
} 
sum(1,2,3)