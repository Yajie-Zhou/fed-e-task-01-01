
// Promise 并行执行

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

// 请求多个接口，接口之间没有依赖时
// var promise = Promise.all([
//     ajax('/api/users.json'),
//     ajax('/api/posts.json')
// ])
// promise.then(function(values) {
//     console.log(values) // arr
// }).catch(function(error) {
//     console.log(error)
// })

// 先去获取urls.json，然后同时获取其中url的内容，全部完成后执行第二个then方法
ajax('/api/urls.json')
    .then(value=>{
        const urls = Object.valuse(value)
        const tasks = urls.map(url => ajax(url))
        return Promise.all(tasks)
    })
    .then(values => {
        console.log(values)
    })
    

const request = ajax('/api/urls.json')
const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('timeout')), 500)
})
// 500ms之内ajax完成执行 resolve，之后执行 reject
Promise.race([
    request, timeout
])
.then(value => {
    console.log(value)
})
.catch(error=> {
    console.log(error)
})