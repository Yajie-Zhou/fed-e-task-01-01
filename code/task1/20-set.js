// Set 数据结构

const s = new Set()

s.add(1).add(2).add(3).add(4).add(2)

// console.log(s)

// s.forEach(i => console.log(i))

// for(let i of s) {
//     console.log(i)
// }

// console.log(s.size)

// 用来判断数组中是否含有某个特定的值
// console.log(s.has(100))

// console.log(s.delete(3), s)

// 清除所有元素
// s.clear() 
// console.log(s)

// 数组去重
const arr = [1, 2, 3, 1, 4, 2, 2]
// 
// const res = Array.from(new Set(arr))

const res = [...new Set(arr)]

console.log(res)
