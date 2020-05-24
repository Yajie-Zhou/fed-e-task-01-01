// var a = [];
// for(var i=0; i<10; i++) {
// 	a[i] = function() {
// 		console.log(i);
// 	}
// }
// a[6]();


// var tmp = 123;

// if(true) {
//     console.log(tmp);
//     let tmp;
// }

// var a = 10;
// var obj = {
// 	a: 20,
// 	fn () {
// 		setTimeout(() => {
// 			console.log(this.a)
// 		})
// 	}
// }
// obj.fn()


// setTimeout(function() {
// 	var a = 'hello';
// 	setTimeout(function() {
// 		var b = 'lagou';
// 		setTimeout(function() {
// 			var c = 'I LOVE U';
// 			// console.log(a + b + c);
// 		}, 10)
// 	}, 10)
// }, 10)


// function timeout(_txt1, _txt2, _t) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(_txt1+_txt2);
// 		}, _t);
// 	})
// }
// // 笨方法
// timeout('', 'hello', 10).then(function(res) {
// 	// console.log(res)
// 	timeout(res, 'lagou', 10).then(function(res) {
// 		// console.log(res)
// 		timeout(res, 'I LOVE U', 10).then(function(res) {
// 			console.log(res)
// 		})
// 	})
// })
// // 链式调用
// timeout('', 'hello', 10).then(function(res) {
// 	// console.log(res)
// 	return timeout(res, 'lagou', 10)
// }).then(function(res) {
// 	// console.log(res)
// 	return timeout(res, 'I LOVE U', 10)
// }).then(function(res) {
// 	// console.log(res)
// 	console.log(res)
// }).catch(function(error) {
// 	console.log('reject: ',error)
// })

// // Generator 异步方案
// function * timeout2(_txt1, _txt2, _t) {
// 	const test = yield timeout('', 'hello', 10);
// 	// console.log(test)
// 	const test1 = yield timeout(test, 'lagou', 10);
// 	// console.log(test1)
// 	const test2 = yield timeout(test1, 'I LOVE U', 10);
// 	// console.log(test2)
// }
// // 方法1
// const g = timeout2()
// const res = g.next()
// res.value.then(data=> {
// 	// console.log(data)
// 	const res2 = g.next(data)
// 	if(res2.done) return
	
// 	res2.value.then(data=> {
// 		// console.log(data)
// 		const res3 = g.next(data)
// 		if(res3.done) return

// 		res3.value.then(data=>{
// 			// console.log(data)
// 		})
// 	})
// })

// // 方法2
// function test(generator) {
// 	const g = generator()

// 	function handleRes(res) {
// 		if(res.done) return
// 		res.value.then(data=> {
// 			handleRes(g.next(data))
// 			console.log(data)
// 		})
// 	}
// 	handleRes(g.next())
// }
// test(timeout2)

var arr = [12, 34, 32, 89, 4];

console.log(Math.min(...arr))

