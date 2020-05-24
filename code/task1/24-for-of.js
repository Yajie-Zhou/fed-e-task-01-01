
const arr = [100, 200, 300, 455]

// for(const item of arr) {
//     console.log(item)
// }

// arr.forEach(item=>{
//     console.log(item)
// })

// for(const item of arr) {
//     console.log(item)
//     if(item > 100) {
//         break
//     }
// }

// arr.forEach() 不能跳出循环
// arr.some()
// arr.every()


// const s = new Set(['foo', 'bar'])

// for(const item of s) {
//     console.log(item)
// }

// const m = new Map()
// m.set('foo', '1234')
// m.set('bar', '324')
// for(const [key, vaule] of m) {
//     console.log(key, vaule)
// }

const obj = {
    fooo: 124, bar: 356
}

for(const item of obj) {
    console.log(item)
}