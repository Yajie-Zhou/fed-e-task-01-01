// 

export {}

// 参数个数必须保持一致
// 可选参数(b?:number)、参数默认值(b: number = 10)都必须出现在参数列表最后
// 接收任意个数的参数 使用 ... 操作符
function func1(a: number, b: number = 10, ...rest: number[]): string {
    return 'func1'
}
func1(100, 200)
func1(100)

const func2: (a: number, b:number) => string = function(a: number, b: number): string {
    return 'func2'
}