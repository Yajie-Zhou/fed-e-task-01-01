// Promise 常见误区

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

ajax('/users11.json').then(function(res) {
    ajax('/users11.json').then(function(res) {
        ajax('/users11.json').then(function(res) {
            ajax('/users11.json').then(function(res) {
    
            })
        })
    })
})