// 同步模式
// console.log('global begin')

// function bar() {
//     console.log('bar task')
// }

// function foo() {
//     console.log('foo task')
//     bar()
// }
// foo()

// console.log('global end')


// 异步模式
// console.log('global begin')
// // setTimeout函数内部是异步调用，在内部为time1函数开启倒计时器，该倒计时器单独工作，不受js线程影响
// setTimeout(function timer1() {
//     // 倒计时结束后，放到消息队列的第二位
//     console.log('timer1 invoke')
// }, 1800)
// setTimeout(function timer2() {
//     // 倒计时结束后，放到消息队列的第一位
//     console.log('timer2 invoke')

//     setTimeout(function inner() {
//         console.log('inner invoke')
//     }, 1000)
// }, 1000)
// // 执行后，调用栈就没有工作了。Eventloop发挥作用，负责监听调用栈和消息队列。一旦调用栈中所有任务结束，事件循环会从消息队列中取出第一个回调函数，压入到调用栈。直到调用栈和消息队列中都没有要执行的任务，代码执行结束。
// // 调用栈-》正在执行的工作表  消息队列-》待办工作表
// // JS执行引擎先去执行完调用栈中所有的任务，然后通过事件循环从消息队列中再取一个任务出来继续去执行，依此类推。整个过程，随时可以往详细队列中放入一些任务，这些任务会在消息队列中排队等待事件循环。
// console.log('global end')


// 回调函数
// function foo(callback) {
//     setTimeout(function() {
//         callback()
//     }, 1000)
// }
// foo(function() {
//     console.log('这是个回调函数')
// })


// Promise 基本示例
// const promise = new Promise(function(resolve, reject) {
//     // 用于兑现承诺
//     // resolve(100)  // 承诺达成

//     reject(new Error('promise rejected')) // 承诺失败
// })
// promise.then(function(value) {
//     console.log('resolved', value)
// }, function(error) {
//     console.log('rejected', error)
// })
// console.log('end')

// Promise 使用案例
// function ajax(url) {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET', url);
//         xhr.responseType = 'json'
//         // 请求完成
//         xhr.onload = function() {
//             if(this.status === 200) {
//                 resolve(this.response)
//             }else {
//                 reject(new Error(this.statusText))
//             }
//         }
//         xhr.send()
//     })
// }

// ajax('users.json').then(function(res) {
//     console.log(res)
// }, function(error) {
//     console.log(error)
// })

// Promise 常见误区
// function ajax(url) {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET', url);
//         xhr.responseType = 'json'
//         // 请求完成
//         xhr.onload = function() {
//             if(this.status === 200) {
//                 resolve(this.response)
//             }else {
//                 reject(new Error(this.statusText))
//             }
//         }
//         xhr.send()
//     })
// }
// ❌
// ajax('/api/url.json').then(function(urls) {
//     ajax(urls.users).then(function(urls) {
//         ajax(urls.users).then(function(urls) {
        
//         })
//     })
// }, function(error) {
//     console.log(error)
// })

// 链式调用
// function ajax(url) {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET', url);
//         xhr.responseType = 'json'
//         // 请求完成
//         xhr.onload = function() {
//             if(this.status === 200) {
//                 resolve(this.response)
//             }else {
//                 reject(new Error(this.statusText))
//             }
//         }
//         xhr.send()
//     })
// }
// var promise = ajax('/api/users.json') 

// var promise2 = promise.then(
//     function onFulfilled(value) {
//         console.log('onFulfilled', value)
//     },
//     function onRejected(error) {
//         console.log('onRejected', error)
//     }
// )
// console.log(promise2 === promise) // false

// 每一个then 方法都是在为上一个then方法返回的promise对象添加状态明确过后的回调
// ajax('/api/users.json') 
//     .then(function(value) {
//         console.log(1111)

//         return ajax('/api/urls.json')
//     }) // => Promise
//     .then(function(value) {
//         console.log(2222)
//     }) // => Promise
//     .then(function(value) {
//         console.log(3333)
//     }) // => Promise
//     .then(function(value) {
//         console.log(4444)
//     }) // => Promise
//     .then(function(value) {
//         console.log(5555)
//     })


// Promise 异常处理
// ajax('/api/users.json').then(
//     function onFulfilled(value) {
//         console.log('onFulfilled', value)
//         return ajax('/error.json')
//     },
//     // 只能捕获到 ajax('/api/users.json') 的异常
//     function onRejected(error) {
//         console.log('onRejected', error)
//     }
// )
// // 建议使用该方法
// ajax('/api/users11.json')
//     .then(function onFulfilled(value) {
//         console.log('onFulfilled', value)
//     }) // =》Promise
//     // 前面 ajax('/api/users11.json') 的异常可以一直向后传递，直到捕获
//     .catch(function onRejected(error) {
//         console.log('onRejected', error)
//     })

// // 全局注册 unhandledrejection 事件，处理没有被手动捕获的promise异常
// window.addEventListener('unhandledrejection', event=>{
//     const {reason, promise} = event
//     console.log(reason, promise)
//     // reason => Promise 失败原因，一般是一个错误对象
//     // promise => 出现异常的Promise对象
//     event.preventDefault()
// }, false)
// // node环境
// process.on('unhandledRejection', (reason, promise) => {
//     console.log(reason, promise)
//     // reason => Promise 失败原因，一般是一个错误对象
//     // promise => 出现异常的Promise对象
// })


// Promise 静态方法
// Promise.resolve('foo')
//     .then(function(value){
//         console.log(value)
//     })
// 这两个方法效果相同
// new Promise(function(resolve, reject) {
//     resolve('foo')
// })

// var promise = ajax('api/user.json')
// var promise2 = Promise.resolve(promise)
// console.log(promise === promise2) //true
    
// Promise.reject('anything')
//     .catch(function(error) {
//         console.log(error)
//     })


// Promise 并行执行
// var promise = Promise.all([
//     ajax('/api/users.json'),
//     ajax('/api/posts.json')
// ])
// promise.then(function(values) {
//     console.log(values)
// }).catch(function(error) {
//     console.log(error)
// })
// 先去获取urls.json，然后同时获取其中url的内容，全部完成后执行第二个then方法
// ajax('/api/urls.json')
//     .then(value=>{
//         const urls = Object.valuse(value)
//         const tasks = urls.map(url => ajax(url))
//         return Promise.all(tasks)
//     })
//     .then(values => {
//         console.log(values)
//     })

// const request = ajax('/api/urls.json')
// const timeout = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('timeout')), 500)
// })
// // 500ms之内ajax完成执行 resolve，之后执行 reject
// Promise.race([
//     request, timeout
// ])
// .then(value => {
//     console.log(value)
// })
// .catch(error=> {
//     console.log(error)
// })



// 微任务
// console.log('global start')  // 1
// // 宏任务
// setTimeout(() =>{
//     console.log('setTimeout') 
// }, 0)
// Promise.resolve()
//     .then(() => {
//         console.log('promise') // 3 
//     })
//     .then(() => {
//         console.log('promise 2') // 4
//     })
// console.log('global end') // 2


// Generator 异步方案
// function * foo() {
//     console.log('start')
    
//     try{
//         const res = yield 'foo'
//         console.log('inner', res) //bar
//     }catch(e) {
//         console.log(e)
//     }
// }
// const generator = foo()
// const res = generator.next()
// console.log('outer', res)
// generator.next('bar')
// generator.throw(new Error('Generator error'))


// function * main() {
//     try {
//         const users = yield ajax('/api/users.json')
//         console.log(users)

//         const posts = yield ajax('/api/posts.json')
//         console.log(posts)
//     } catch(e) {
//         console.log(e)
//     }
// }
// // 调用生成器函数得到一个生成器对象
// const g = main()
// const res = g.next()
// res.value.then(data=>{
//     const res2 = g.next(data)
//     if(res2.done) return
//     res2.valuse.then(data => {
//         const res3 = g.next(data)
//         if(res3.done) return
//         res3.valuse.then(data=>{
//             g.next(data)
//         })
//     })
// })

// 递归实现 generator.next() 的调用，知道done为true终止
// function handleRes(res) {
//     if(res.done) return
//     res.value.then(data => {
//         handleRes(g.next(data))
//     }, error=> {
//         g.throw(error)
//     })
// }
// handleRes(g.next())

// function co(generator) {
//     const g = generator()

//     function handleRes(res) {
//         if(res.done) return
//         res.value.then(data => {
//             handleRes(g.next(data))
//         }, error=> {
//             g.throw(error)
//         })
//     }
//     handleRes(g.next())
// }
// co(main)


// function dfs(value) {
//     const res = g.next(value)
//     if(res.done) return
//     res.value.then(data => {
//         console.log(data)
//         dfs(data)
//     })
// } 


// Async/Await 语法糖 
// Promise.resolve(1)
//   .then(function(){return 2})
//   .then(function(){return Promise.resolve(3)})
//   .then(console.log)



async function main() {
    try {
        const users = await ajax('/api/users.json')
        console.log(users)

        const posts = await ajax('/api/posts.json')
        console.log(posts)
    } catch(e) {
        console.log(e)
    }
}