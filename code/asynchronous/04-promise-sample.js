// Promise 基本示例

// Promise 接收函数作为参数 -》兑现承诺的逻辑
const promise = new Promise(function(resolve, reject) {
    // 这里用于“兑现”承诺

    // promise状态确定后不能被修改，所以resolve reject只能调用一个
    // 承诺达成
    // resolve(100)  // 将Promise的状态修改为 Fulfilled，异步任务的操作结果会通过参数传递出去
    // 承诺失败
    reject(new Error('promise rejected')) // 将Promise的状态修改为 Rejected，参数传递错误的对象，表示为什么失败
})
// 可以用实例的then方法分别去指定 onFulfilled（第一个参数）、onRejected（第二个参数） 回调函数
// 即使Promise函数里没有任何异步操作，then方法指定的回调函数依然会进入到回调队列中排队
promise.then(function(value) {
    console.log('resolved', value)
}, function(error) {
    console.log('rejected', error)
})
// 优先被打印
console.log('end')