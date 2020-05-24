
// console.log(
//     // Symbol() === Symbol()
//     Symbol('foo') === Symbol('foo')
// )


// const s1 = Symbol.for('foo')
// const s2 = Symbol.for('foo')
// console.log(s1 === s2)

// console.log(
//     Symbol.for(true) === Symbol.for('true')
// )

// console.log(Symbol.iterator)
// console.log(Symbol.hasInstance)

// 自定义对象的toString标签
// const obj = {
//     [Symbol.toStringTag]: 'XObject'
// }
// // [object Object] - 对象的toString标签
// console.log(obj.toString())

// const obj = {
//     [Symbol()]: 'symbol value',
//     foo: 'normal value'
// }

// for(var key in obj) {
//     console.log(key)
// }
// console.log(Object.keys(obj))
// console.log(JSON.stringify(obj))
// console.log(Object.getOwnPropertySymbols(obj))