// 类的访问修饰符

export {}

class Person {
    // TS 中，类成员的访问修饰符默认是public
    public name: string // = 'init name'
    private age: number
    protected gender: boolean

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

class Student extends Person {
    // 不能被实例化和继承，但在内部可以被访问
    private constructor(name: string, age: number) {
        super(name, age)
        console.log(this.gender) // 可以访问到，protected 只允许在子类中访问
    }
    static create(name: string, age: number) {
        return new Student(name, age)
    }
}

const tom = new Person('tom', 18)
console.log(tom.name)
// console.log(tom.age) // 报错 私有属性
// console.log(tom.gender) // 报错 protected 也不能在外部访问

// const jack = new Student('jack', 18) // 报错
const jack1 = Student.create('jack', 18) 