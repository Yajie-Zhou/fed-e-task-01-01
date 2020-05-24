// any

// mixed 可以接受任意类型的值，可以理解为所有类型的联合类型  强类型
function passMixed(value: mixed) {
    if(typeof value === 'string') {
        value.substr(1)
    }
    if(typeof value === 'number') {
        value * value
    }
}
passMixed('string')
passMixed(100)

// any 弱类型, 尽量不使用，方便兼容老代码
function passAny(value: any) {
    value.substr(1)

    value * value
}
passAny('string')
passAny(100)