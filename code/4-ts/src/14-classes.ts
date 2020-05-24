// 类

export {}

class Person {
    // TS中，类的属性在使用之前必须在类型中声明
    // TS中，类的属性必须有初始值，可以用=赋值，或者在构造函数中初始化
    name: string // = 'init name'
    age: number 

    constructor(name: string, age:number) {
        this.name = name
        this.age = age
    }

    sayHi(msg: string):void {
        console.log(`I am ${this.name}, ${msg}`)
    }
}