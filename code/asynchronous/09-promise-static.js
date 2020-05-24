// promise 静态方法

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

Promise.resolve('foo')
    .then(function(value) {
        console.log(value) // foo
    })
// 上下两种方法等价
new Promise(function(resolve, reject) {
    resolve('foo')
})

var promise = ajax('users.json')
var promise2 = Promise.resolve(promise)
console.log(promise === promise2) // true

// 传入的对象中，包含then方法，这个对象也可以被当作promise对象被执行，实现了thenable的接口，可以被then的对象
Promise.resolve({
    then: function(onFulfilled, onRejected) {
        onFulfilled('foo')
    }
})
.then(function(value) {
    console.log(value) // foo
})


Promise.reject('anything')
    .catch(function(error) {
        console.log(error)
    })
