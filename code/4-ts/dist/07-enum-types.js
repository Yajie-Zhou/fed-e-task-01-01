"use strict";
// 枚举
Object.defineProperty(exports, "__esModule", { value: true });
// const PostStatus = {
//     Draft: 0,
//     Unpublished: 1,
//     Published: 2
// }
// const post = {
//     title: 'Hello',
//     content: 'testtesttesttesttesttest',
//     status: PostStatus.Draft // 0-草稿 1-未发布  2-已发布 
// }
// enum PostStatus {
//     Draft = 0,
//     Unpublished = 1,
//     Published = 2
// }
// 不指定元素的值，默认枚举中的值从0开始累加；如果第一个元素指定了值，后面的元素在第一个元素的值上进行累加
// enum PostStatus {
//     Draft,
//     Unpublished,
//     Published
// }
// const post = {
//     title: 'Hello',
//     content: 'testtesttesttesttesttest',
//     status: PostStatus.Draft // 0-草稿 1-未发布  2-已发布 
// }
// 字符串枚举， 需要给每个元素进行初始化
// enum PostStatus {
//     Draft = 'aaa',
//     Unpublished = 'bbb',
//     Published = 'ccc'
// }
// 枚举类型会入侵到运行时的代码，会影响编译后的结果，被编译为一个双向的键值对对象
// 可以通过键获取值，通过值获取键
// var PostStatus;
// (function (PostStatus) {
//     PostStatus[PostStatus["Draft"] = 0] = "Draft";
//     PostStatus[PostStatus["Unpublished"] = 1] = "Unpublished";
//     PostStatus[PostStatus["Published"] = 2] = "Published";
// })(PostStatus || (PostStatus = {}));
// 如果不需要使用索引器，建议使用常量枚举
// const enum PostStatus {
//     Draft,
//     Unpublished,
//     Published
// }
// const post = {
//     title: 'Hello',
//     content: 'testtesttesttesttesttest',
//     status: PostStatus.Draft // 0-草稿 1-未发布  2-已发布 
// }
// 
// Object.defineProperty(exports, "__esModule", { value: true });
// var post = {
//     title: 'Hello',
//     content: 'testtesttesttesttesttest',
//     status: 0 /* Draft */ // 0-草稿 1-未发布  2-已发布 
// };
//# sourceMappingURL=07-enum-types.js.map