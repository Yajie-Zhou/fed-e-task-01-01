// 链式调用

function ajax(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.onload = function() {
            if(this.status === 200) {
                resolve(this.response)
            }else {
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}

var promise = ajax('users.json')

// then 方法就是为promise对象添加状态明确后的回调函数，第一个是成功后的回调，第二个是失败后的回调（可省略）
// then 方法内部也会返回promise对象
var promise2 = promise.then(
    function onFulfilled(value) {
        console.log('onFulfilled', value)
    },
    function onRejected(error) {
        console.log('onRejected', error)
    }
)
// console.log(promise2)
// then 方法返回的是全新的promise对象
// console.log(promise2 === promise) // false

// then 方法返回全新的promise对象的作用，是为了实现一个全新的链条
// 每个承诺都可以负责一个异步任务，相互不受影响
// 每一个的then方法就是在为上一个then方法返回的Promise对象添加状态明确过后的回调
// 可以避免不必要的回调嵌套，尽量保证代码的扁平化
ajax('users.json')
    .then(function(value) {
        console.log(111)
        // 可以手动返回 promise对象
        return ajax('users.json')
    })
    .then(function(value) {
        console.log(222)
        console.log(value)
        return ajax('users.json')
    })
    .then(function(value) {
        console.log(333)
        return ajax('users.json')
    })
    .then(function(value) {
        console.log(444)
        // 返回的值会被当作当前then方法返回的promise中的值
        return 'foo'
    })
    .then(function(value) {
        console.log(555)
        console.log(value) // foo， 如果没有返回值，默认为undefined
    })