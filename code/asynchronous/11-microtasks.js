// 微任务
console.log('global start')  // 1
// 宏任务
setTimeout(() =>{
    console.log('setTimeout') 
}, 0)
Promise.resolve()
    .then(() => {
        console.log('promise') // 3 
    })
    .then(() => {
        console.log('promise 2') // 4
    })
console.log('global end') // 2