// 对象字面量

const bar = '345'
const obj = {
    foo: 123,
    // bar: bar
    bar,
    // method1: function() {
    //     console.log('111')
    // },
    // 普通function
    method1() { 
        console.log('111')
        console.log(this) //指向当前对象
    },
    [Math.random()]: 123445
}

obj[Math.random()] = 124

console.log(obj)
obj.method1()