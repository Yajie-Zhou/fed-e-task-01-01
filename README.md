### 模块一 ES 新特性与 JS 异步编程、TypeScript 简答题

#### 1、请说出下列最终的执行结果，并解释为什么？

	```
	var a = [];
	for(var i=0; i<10; i++) {
		a[i] = function() {
			console.log(i);
		}
	}
	a[6](); 
	
	// 执行结果：10
	```
##### 解析：
- for 循环中，用 var 声明的变量 i 会被提升到全局作用域；
- 在 for 循环里，将匿名函数 function 赋值给数组 a 的元素；
- for 循环结束后，执行数组 a 中下标为 6 的 function，在该 function 里，打印 i 的值；而在该函数作用域里找不到变量 i ，会继续向上级作用域（全局作用域）查找，而全局作用域中的 i 在for循环结束后被累加为 10，从而结果为10。

#### 2、请说出下列最终的执行结果，并解释为什么？
```
var tmp = 123;

if(true) {
    console.log(tmp);
    let tmp;
}

// 执行结果：ReferenceError: Cannot access 'tmp' before initialization
```
- 解析：let 命令存在暂时性死区，必须先声明后使用。

#### 3、结合ES6新语法，用最简单的方式找出数组中的最小值？
```
var arr = [12, 34, 32, 89, 4];

console.log(Math.min(...arr))

```
#### 4、请详细说明var、let、const三种声明变量的方式之间的具体差别？
- 简述
	- var 定义的变量，没有块的概念，可以跨块访问，不能跨函数访问；
	- let 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问；
	- const 用来定义常量，使用时必须初始化，只能在声明所在的块作用域里访问，不能修改。
- var和let的差别：
	- 1、作用域：
		- var — 只有全局作用域和函数作用域概念，没有块级作用域概念；
		- let — 只有块级作用域概念，由 {} 包括起来； 
	- 2、变量提升 vs 暂时性死区
		- var存在变量提升，而let声明的变量不存在变量提升，所以一定要在声明后使用，否则报错 ReferenceError
		- ES6明确规定，如果区块中存在let和const命令，则这个区块对这些命令声明的变量从一开始就形成封闭作用域，不再受外部的影响。只要在声明之前使用这些变量，就会报错。语法上称为 =》‘暂时性死区’
	- 3、let 不允许在相同作用域内重复声明同一个变量，var可以多次声明；
	- 4、全局变量和全局对象的属性
		- ES5中全局对象的属性和全局变量基本是等价的，但也有区别：通过var声明的全局变量不能使用 `delete` 命令从 window/global 上删除，不过在变量的访问上基本等价；
		- ES6中做了严格的区分，使用 `var` 和 `function` 命令声明的全局变量依旧是全局对象的属性，而使用 let 、const 、class 命令声明的全局变量不属于全局对象的属性。
			
			```
			var a = 10;
		    console.log(window.a); //10
		    console.log(this.a) //10
		
		    let b = 20;
		    console.log(window.b); // undefined
		    console.log(this.b) // undefined
			```
			
- const 声明的常量
 	- const 和 let 作用域一致，不同的是 const 一旦声明常量，就必须立即初始化，且不能再改变；
 	- const 声明的常量也不提升，同样存在暂时性死区，只能在声明后使用；
 	- ❗️简单数据类型（数字、字符串、布尔值）： 值保存在变量指向的内存地址，因此等同于常量；
 	- ❗️复合数据类型（对象、数组）：变量指向的内存地址，保存的是一个指针，const只能保证变量名指向的地址不变，并不保证该地址的数据不变

#### 5、请说出下列最终的执行结果，并解释为什么？
```
var a = 10;
var obj = {
	a: 20,
	fn () {
		setTimeout(() => {
			console.log(this.a)
		})
	}
}
obj.fn()

// 执行结果：20
```
- 解析：箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的，也就是说，函数在定义时，this就继承了定义函数的对象。所以 fn 里的this指向obj，所以值为 20。

#### 6、简述Symbol类型的用途？
- 1、使用Symbol来作为对象属性名（不需要对外操作和访问的属性）；
- 2、使用Symbol来代替常量
- 3、使用Symbol定义类的私有属性/方法
- 4、注册和获取全局Symbol（涉及多个window时）
- 5、Iterator 迭代器

#### 7、说说什么是浅拷贝，什么是深拷贝？
- 简单说，浅拷贝只复制一层对象的属性，而深拷贝会递归复制对象的所有层级。

- 浅拷贝：复制一层对象的属性，并不包括对象里引用类型的数据，当改变拷贝的对象里的引用类型时，源对象也会改变；
- 深拷贝：重新开辟一个内存空间，需要递归拷贝对象里的引用，直到子属性都为基本类型。两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

##### 相关知识点
- JavaScript变量包含两种不同数据类型的值：基本类型和引用类型
	- 基本类型：Undefined、Null、Boolean、Number、String、Symbol；
	- 引用类型：Object、Array等
- JavaScript变量的存储方式：栈 和 堆
	- 栈：自动分配内存空间，系统自动释放，里面存放基本类型的值和引用类型的地址；
	- 堆：动态分配的内存，大小不定，也不会自动释放，里面存放引用类型的值。 

	- 基本类型：按值访问，可以直接操作（传值）；
	- 引用类型：变量名存放在栈内存中，变量值存放在堆内存中，栈内存会提供一个引用的地址指向堆内存中的值。当需要访问引用类型的值时，首先从栈内存中获得该对象的地址指针，然后再从堆内存中取得所需的数据（传址）；
	


#### 8、谈谈你是如何理解JS异步编程的，EventLoop是做什么的，什么是宏任务，什么是微任务？
- 1、如何理解JS异步编程？
	- JS异步编程，也就是单线程的JS异步方案。
	
	- 为什么会存在JS异步编程（单线程JS异步方案）？
		- 因为JS采用的是单线程工作模式，单线程可以理解为JS执行环境中负责执行代码的线程只有一个。如果存在耗时任务，后面的任务都需要等待前面的任务执行完成才能执行。这种模式执行效率低，任务耗时长，会出现程序被拖延、假死的情况。为了解决这个问题，就提出了‘异步模式’。
		
		- 扩展：那JS为什么采用单线程？
			- 和最早的设计初衷有关，JS最早是运行在浏览器端的脚本语言，实现页面的动态交互，动态交互的核心是DOM操作，所以必须使用单线程，否则会出现线程同步问题。
	
	- 什么是异步模式？
		- 异步模式，指的是不会等待这个任务结束才开始下一个任务，耗时任务开启后就立即往后执行下一个任务，后续的逻辑会通过回调函数的方式定义。 
		- 需要区分同步模式，它指的是一次只能完成一个任务，如果有多个任务就必须排队等候，前面一个任务执行完成，再执行后一个任务。
		
- 2、JS事件循环机制
	- JS 事件循环机制分为浏览器和Node事件循环机制，两者实现技术不一样，浏览器 EventLoop是HTML定义的规范，Node EventLoop是由libuv库实现的，主要总结浏览器部分。
	- JS 有一个主线程和调用栈，所有的任务都会被放到调用栈等待主线程执行；
	- JS 调用栈：是一种后进先出的数据结构。当函数被调用时，会被添加到栈中的顶部，执行完成之后从栈顶部移出该函数，直到栈内被清空。
	- JS单线程中的任务分为同步任务和异步任务。
		- 同步任务会在调用栈中按照顺序排队等待主线程执行；
		- 异步任务会在异步有了结果后将注册的回调函数添加到任务队列中等待主线程空闲的时候，也就是栈内被清空的时候，被读取到栈中等待主线程执行。任务队列是先进先出的数据结构。 
	- EventLoop：调用栈中的同步任务都执行完成，栈内被清空了，也就代表主线程空闲了，这时候会去任务队列中按照顺序读取一个任务放入到栈中执行。每次栈内被清空，都会去读取任务队列有没有任务，有就读取执行，一直循环读取-执行的操作，就形成了事件循环。 

- 3、宏任务、微任务
	- 宏任务 macro-task：
		- script（整体代码）、setTimeout、setInterval、setImmediate、UI rendering； 
	- 微任务 micro-task：
		- process.nextTick、Promise、Object.observe、MutationObserver。 
	- JS 的执行顺序：
		- 第一次事件循环中，JS引擎会把整个script代码当成一个宏任务执行，执行完成之后，再检测本次循环中是否存在微任务，存在的话就依次从微任务的任务队列中读取执行完成所有的微任务，再读取宏任务的任务队列中的任务执行，再执行所有的微任务，如此循环。JS的执行顺序就是每次事件循环中的宏任务-微任务。 


- 扩展：setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行	


#### 9、将下面异步代码使用Promise改进？
```
setTimeout(function() {
	var a = 'hello';
	setTimeout(function() {
		var b = 'lagou';
		setTimeout(function() {
			var c = 'I love U';
			console.log(a + b + c);
		}, 10)
	}, 10)
}, 10)
```
- 方案1

	```
	function timeout(_txt1, _txt2, _t) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(_txt1+_txt2);
			}, _t);
		})
	}
	// 方法1：笨方法
	timeout('', 'hello', 10).then(function(res) {
		// console.log(res)
		timeout(res, 'lagou', 10).then(function(res) {
			// console.log(res)
			timeout(res, 'I LOVE U', 10).then(function(res) {
				console.log(res)
			})
		})
	})
	// 方法2：链式调用
	timeout('', 'hello', 10).then(function(res) {
		return timeout(res, 'lagou', 10)
	}).then(function(res) {
		return timeout(res, 'I LOVE U', 10)
	}).then(function(res) {
		console.log(res)
	}).catch(function(error) {
		console.log('reject: ',error)
	})
	```
- 方案2  Generator 异步方案

	```
	function * timeout2(_txt1, _txt2, _t) {
		const test = yield timeout('', 'hello', 10);
		const test1 = yield timeout(test, 'lagou', 10);
		const test2 = yield timeout(test1, 'I LOVE U', 10);
	}
	// 方法1
	const g = timeout2()
	const res = g.next()
	res.value.then(data=> {
		// console.log(data)
		const res2 = g.next(data)
		if(res2.done) return
		
		res2.value.then(data=> {
			// console.log(data)
			const res3 = g.next(data)
			if(res3.done) return
	
			res3.value.then(data=>{
				// console.log(data)
			})
		})
	})
	// 方法2
	function test(generator) {
		const g = generator()
	
		function handleRes(res) {
			if(res.done) return
			res.value.then(data=> {
				handleRes(g.next(data))
				console.log(data)
			})
		}
		handleRes(g.next())
	}
	test(timeout2)
	```

#### 10、请简述TypeScript与JavaScript之间的关系？
- TypeScript 是JavaScript的超集，主要提供了类型系统和对ES6的支持；
- TypeScript 可以编译成 JavaScript 运行在任何浏览器上；
- TypeScript 编译工具可以运行在任何服务器和系统上。

##### 相关理论知识
- JavaScript是一种轻量级的弱类型的解释性脚本语言，可嵌入到HTML页面中，在浏览器端执行；JavaScript是基于对象和事件驱动的，无需特定的语言环境，只需在支持的浏览器上就能运行。
- JavaScript 特点：
	-  较为安全，仅在浏览器端执行，不会访问本地硬盘数据；
	-  具有动态性，JS是事件驱动的，会根据用户操作作出相应的处理；
	-  跨平台，只依赖于浏览器，与操作系统的因素无关；
	-  兼容性好，能与其他技术一起使用。


#### 11、请谈谈你所认为的TypeScript优缺点？
- 优点：
	- 增加了代码的可读性和可维护性；
		- 类型系统是最好的文档
		- 可以在编译阶段就发现错误
		- 增强了编辑器和IDE的功能，包括代码补全、接口提示、跳转到定义、重构等
	- 非常包容
		- .js 文件可以直接重命名为 .ts 
		- 即使不显示定义类型，也能自动做出类型推断
		- 可以定义几乎一切从简单到复杂的类型
		- 兼容第三方库，即使第三方库不是用TypeScript编写的，也可以编写单独的类型文件供TypeScript读取。
	- 生态更完善
		- 大部分第三方库都有提供给TypeScript的类型定义文件      
- 缺点：
	- 语言本身多了很多概念（接口、泛型、类、枚举类型等），学习成本大
	- 项目初期，会增加开发成本（类型声明），不过对于长期维护的项目，TypeScript能够减少其维护成本
	- 集成到构建流程需要一些工作量




































