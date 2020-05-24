// 抽象类

export {}

// 抽象类，只能被继承，不能被实例化
abstract class Animal {
    eat(food: string): void {
        console.log(`呼噜呼噜的吃：${food}`)
    } 

    // 抽象方法，不需要方法体
    abstract run(distance: number):void
}

class Dog extends Animal {
    // 父类中有抽象方法时，子类中必须实现该方法
    run(distance: number): void {
        console.log('四脚爬行', distance)
    }
}

const d = new Dog()
d.eat('saf')
d.run(100)

