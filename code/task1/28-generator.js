// 

// function * foo() {
//     console.log('zou')
//     return 100
// }

// const res = foo()
// console.log(res.next())


function * foo() {
    console.log('11111')
    yield 100
    console.log('22222')
    yield 200
    console.log('33333')
    yield 300
}

const generator = foo()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())