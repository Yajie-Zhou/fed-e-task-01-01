// console.log(1,2,3,4)

// function foo() {
//     console.log(arguments)
// }
// foo(1,2,3,4)


function foo(first, ...res) {
    console.log(res)
}
foo(1,2,3,4)