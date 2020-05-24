// 接口


// 可以用逗号、分号进行分割 也可以省略
interface Post {
    title: string;
    content: string
}

function printPost(post: Post) {
    console.log(post.title)
    console.log(post.content)
}

printPost({
    title: 'Hello',
    content: 'test'
})