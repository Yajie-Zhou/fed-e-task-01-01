// extends 继承

class Person {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(`hi, my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, number) {
        // 始终指向父类，调用它==调用父类的构造函数
        super(name)
        this.number = number
    }
    hello() {
        // 使用super对象访问父类中的成员
        super.say()
        console.log(`my school number is ${this.number}`)
    }
}

const s = new Student('zhou', '110');
s.hello()