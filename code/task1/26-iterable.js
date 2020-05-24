

// const obj = {
//     // 实现可迭代接口 iterable
//     [Symbol.iterator]: function() {
//         // 实现迭代器接口 iterator
//         return {
//             next: function() {
//                 // iterationResult
//                 return {
//                     value: 'zhou',
//                     done: true // 表示迭代有没有结束
//                 }
//             }
//         }
//     }
// }


const obj = {
    store: ['foo', 'bar', 'baz'],
    // 实现可迭代接口 iterable
    [Symbol.iterator]: function() {
        let index = 0;
        const self = this;
        // 实现迭代器接口 iterator
        return {
            next: function() {
                // iterationResult
                const res = {
                    value: self.store[index],
                    // 表示迭代有没有结束
                    done: index>=self.store.length 
                }
                index++
                return res
            }
        }
    }
}

for(const item of obj) {
    console.log('xht', item)
}








