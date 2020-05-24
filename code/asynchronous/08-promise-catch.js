// Promise 异常处理


function ajax(url) {
    return new Promise(function(resolve, reject) {
        // promise 执行异常，或手动抛出异常也会执行rejected
        // foo()
        // throw new Error()

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


ajax('/users.json').then( // /users111.json rejected
    function onFulfilled(value) {
        console.log('onFulfilled', value)
    },
    // promise异常或失败都会执行该方法
    function onRejected(error) {
        console.log('onRejected', error)
    }
)

ajax('/users.json')
    .then(function onFulfilled(value) {
        console.log('onFulfilled', value)
    })
    // 使用catch方法注册onRejected回调
    .catch(function onRejected(error) {
        console.log('onRejected', error)
    })


// ajax('/users.json')
//     .then(function onFulfilled(value) {
//         console.log('onFulfilled', value)
//     })
//     // 等同于catch
//     .then(undefined, function onRejected(error) {
//         console.log('onRejected', error)
//     })