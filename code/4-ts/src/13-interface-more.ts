// 可选成员、只读成员、动态成员

export {}

interface Post {
    title: string
    content: string
    subtitle?: string // 可选成员 string | undefined
    readonly summary: string // 只读成员，不允许修改
}

const hello: Post = {
    title: 'hello',
    content: 'test',
    summary: 'adkfj'
}
// hello.summary = 'other' // 报错

// 动态成员
interface Cache {
    [prop: string]: string
}
const cache: Cache = {}
cache.foo = 'value1'
cache.bar = 'value2'