// 1. 执行流程问题

// setTimeout(() => console.log('A'), 0)
// setTimeout(() => console.log('B'), 0)

// Promise.resolve()
//     .then(() => {
//         setTimeout(() => console.log('C'), 0)
//         setTimeout(() => console.log('D'), 1000)

//         console.log('E')
//         Promise.resolve()
//             .then(() => console.log('F'))
//     })
//     .then(()=>console.log('G'))

// setTimeout(() => console.log('H'), 0)
// setTimeout(() => console.log('I'), 1000)


// 2.Promise.all() 等待所有成员成功结束
// Promise.race() 等待第一个成员结束

// Promise.race([
//     axios('https://api.github.com'),
//     timeout(100)
// ])

// 3. Generator / Async / Await
// // 面试题
// var foo = 100
// async function main() {
//     foo = foo + // 同步执行，还没有执行++，为100
//         await Promise.resolve(10) // 异步执行

//     // foo = await Promise.resolve(10) + foo // 111
//     console.log('main', foo)
// }
// main()
// foo++
// console.log('global', foo)
// // global 101
// // main 110

// 1 同步执行多个异步任务 all / allSettled
// 2 依次执行多个异步任务 reduce 已废弃  按顺序从服务器获取数据

// const axios = require('axios')
// const promises = [
//     axios('https://api.github.com'),
//     axios('https://api.github.com/users')
// ]
// // 依次执行
// promises.reduce((prev, current) => {
//     return prev.then(() => current)
// }, Promise.resolve())

// const nums = [1, 2, 3, 4]
// nums.reduce((prev, item) => {
//     return prev + item
// }, 0)

// async function main() {
//     for(const p of promises) {
//         await p
//     }
// }







// 正则表达式的增强  

// 环视
// const intro = '张三是张三，张三丰是张三丰，张三不是张三丰，张三丰也不是张三'
// const res = intro.replace(/张三/g, '李四')

// 向后断言 / 向后否定
// const res = intro.replace(/张三(?!丰)/g, '李四')
// 向后肯定
// const res = intro.replace(/张三(?=丰)/g, '李四')

// 向前否定
// const res = 'A00 B00'.replace(/(?<!A)00/g, '88')
// 向前肯定
// const res = 'A00 B00'.replace(/(?<=A)00/g, '88')
// console.log(res)



// 正则组命名
// const date = '2020-05-20'
// // const reg = /(\d{4})-(\d{2})-(\d{2})/
// const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
// const res = reg.exec(date)
// console.log(res)


const arr = [
    {id: 1, value: 'A'},
    {id: 1, value: 'B'},
    {id: 1, value: 'C'},
    {id: 1, value: 'D'},
    {id: 1, value: 'E'},
    {id: 1, value: 'F'},
    {id: 1, value: 'G'},
    {id: 1, value: 'H'},
    {id: 1, value: 'I'},
    {id: 1, value: 'J'},
    {id: 1, value: 'K'},
    {id: 1, value: 'L'}
]

console.log(arr.sort((a,b) => a.id-b.id))