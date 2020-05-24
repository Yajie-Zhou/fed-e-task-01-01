// static 方法

class Person {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(`hi, my name is ${this.name}`)
    }
    // 静态方法挂载到类型上，静态方法内部的this指向当前的类型，不会指向某个实例对象
    static create(name) {
        return new Person(name)
    }
}

const p = Person.create('zhou')
p.say()