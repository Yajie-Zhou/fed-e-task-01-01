// 原始数据类型

const a: string = 'foobar'

const b: number = 100 // NaN Infinity

const c: boolean = true // false

// 以上三种类型，非严格模式下，在TypeScript中默认允许为空，null / undefined

// const d: string = null

const e: void = undefined  // null ,严格模式下只能是undefined

const f: null = null

const g: undefined = undefined

const h: symbol = Symbol()

// 

// const error: string = 100

