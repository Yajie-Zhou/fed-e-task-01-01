// Generator 异步方案

function * foo() {
    console.log('start')
    
    try{
        const res = yield 'foo'
        console.log('inner', res) //bar
    }catch(e) {
        console.log(e)
    }
}
const generator = foo()
const res = generator.next()
console.log('outer', res)
generator.next('bar')
generator.throw(new Error('Generator error'))