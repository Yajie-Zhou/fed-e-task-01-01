// ES 2017

// const obj = {
//     foo: '1234',
//     bar: '123455'
// }

// Object.values
// console.log(Object.values(obj))

// Object.entries
// console.log(Object.entries(obj))
// for(const [key, value] of Object.entries(obj)) {
//     console.log(key, value)
// }
// console.log(new Map(Object.entries(obj)))



// Object.getOwnPropertyDescriptors
// ES5以后可以为对象设置getter/setter属性，
const p1 = {
    firstName: 'yajie',
    lastName: 'zhou',
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}
// console.log(p1.fullName)

// const p2 = Object.assign({}, p1)
// p2.firstName = 'test'
// console.log(p2)

const descriptors = Object.getOwnPropertyDescriptors(p1)
const p2 = Object.defineProperties({}, descriptors)
p2.firstName = 'test'
console.log(p2.fullName)






// String.prototype.padStart | String.prototype.padEnd
// const books = {
//     html: 4, 
//     css: 19, 
//     javascript: 123
// }
// // for(const [name, count] of Object.entries(books)) {
// //     console.log(name, count)
// // }

// for(const [name, count] of Object.entries(books)) {
//     console.log(`${name.padEnd(15, '-')}|${count.toString().padStart(3, '0')}`)
// }





// 在函数参数中添加尾逗号

// function foo(bar, baz, ) {

// }

// const arr = [1, 2, 3,]