
// 迭代器模式

// 场景：你我协同开发一个任务清单应用

// my code 

const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '外语'],
    work: ['喝茶'],

    each: function(callback) {
        const all = [].concat(this.life, this.learn, this.work)
        for(const item of all) {
            callback(item)
        }
    },

    [Symbol.iterator]: function() {
        const all = [...this.life, ...this.learn, ...this.work]
        let index = 0
        return  {
            next: function() {
                return {
                    value: all[index],
                    done: index++ >= all.length
                }
            }
        }
    }
}




// your code

// for(const item of todos.life) {
//     console.log(item)
// }
// for(const item of todos.learn) {
//     console.log(item)
// }
// for(const item of todos.work) {
//     console.log(item)
// }

// todos.each(function(item) {
//     console.log(item)
// })

for(const item of todos) {
    console.log(item)
}