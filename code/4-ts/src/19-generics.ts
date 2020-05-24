// 泛型

export {}

function createNumberArray(length: number, value: number): number[] {
    const arr = Array<number>(length).fill(value) // Array 泛型类
    return arr
}

function createStringArray(length: number, value: string): string[] {
    const arr = Array<string>(length).fill(value) // Array 泛型类
    return arr
}

// <T> 泛型参数
function createArray<T>(length: number, value: T): T[] {
    const arr = Array<T>(length).fill(value) // Array 泛型类
    return arr
}

// const res = createNumberArray(3, 100)
// res => [100, 100, 100] 

const res = createArray<string>(3, 'foo')