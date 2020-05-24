// const person = {
//     name: 'zhoou',
//     age: 20
// }

// // 第一个参数：需要代理的目标对象
// // 第二个参数：代理的处理对象
// const personProxy = new Proxy(person, {
//     // 监测数据的访问
//     // target - 代理的目标对象
//     // property - 外部访问的属性名
//     get(target, property) {
//         return property in target ? target[property] : 'default'
//         // console.log(target, property)
//         // return 100
//     },
//     // 监测数据的设置
//     // target - 代理的目标对象
//     // property - 需要设置的属性
//     // value - 设置的属性值
//     set(target, property, value) {
//         if(property === 'age') {
//             if(!Number.isInteger(value)) {
//                 throw new TypeError(`${value} is not an int`)
//             }
//         }
//         target[property] = value
//         console.log(target, property, value)
//     }
// })
// personProxy.age = 21
// personProxy.gender = true

// console.log(personProxy.name)
// console.log(personProxy.XXX)


// Proxy 对比 defineProperty
// const person = {
//     name: 'zhoou',
//     age: 20
// }

// const personProxy = new Proxy(person, {
//     // target - 代理对象
//     // property - 要删除的属性名称
//     deleteProperty(target, property) {
//         console.log('delete', property)
//         delete target[property]
//     }
// })

// delete personProxy.age
// console.log(person)

const person = {}

Object.defineProperty(person, 'name', {
    get() {
        console.log('name 被访问')
        return person._name
    },
    set(value) {
        console.log('name 被设置')
        person._name = value
    }
})
Object.defineProperty(person, 'age', {
    get() {
        console.log('age 被访问')
        return person._age
    },
    set(value) {
        console.log('age 被设置')
        person._age = value
    }
})
person.name = 'jack'
console.log(person.name)




// 数组
// const list = []
// const listProxy = new Proxy(list, {
//     // property - 数组下标
//     set(target, property, value) {
//         console.log('set', property, value)
//         target[property] = value
//         return true // 表示写入成功
//     }
// })

// listProxy.push(100)










































