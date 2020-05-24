// const source1 = {
//     a: 123, 
//     b: 123
// }

// const source2 = {
//     b: 879, 
//     d: 879
// }

// const target = {
//     a: 456,
//     c: 456
// }


// const res = Object.assign(target, source1, source2)
// console.log(target, res === target)

function func(obj) {
    // obj.name = 'func obj';
    // console.log(obj)

    const funcObj = Object.assign({}, obj) 
    funcObj.name = 'func obj'
    console.log(funcObj)
}

const obj = {name: 'global obj'}
func(obj) 
console.log(obj)