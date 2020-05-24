// 类的只读属性

class Person {
    // TS 中，类成员的访问修饰符默认是public
    public name: string // = 'init name'
    private age: number
    protected readonly gender: boolean

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }
    
    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}`)
        console.log(this.age)
    }
}

const tom = new Person('tom', 18)
console.log(tom.name)
// tom.gender = false // 报错