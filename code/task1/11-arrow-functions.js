// 箭头函数

// function inc(number) {
//     return number + 1
// }

// const inc = n => n+1

// const inc = (n, m) => {
//     console.log('inc')
//     return n+1
// }

// console.log(inc(100))

const arr = [1,2,3,4,5,6,7]

arr.filter(function(item) {
    return item%2
})

const _a = arr.filter(i => i%2)
console.log(_a)