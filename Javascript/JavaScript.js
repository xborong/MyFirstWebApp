'use strict'

// 多次声明
var a = 10;
console.log(a.toString());
var a = 20;
console.log(a.toString());

// 提升
b = 20;
f1(a); // => 20
function f1(x) {
	console.log(x.toString());
}
var b;


// 异常处理
function throwException() {
	throw new Error('Problem!');
}
try {
	throwException();
} catch (e) {
	// console.log("=== 错误信息 ====");
	// console.log(e);  
	// console.log("=== 错误栈 ====");
	// console.log(e.stack);
}

// 立即执行函数表达式
(function() {
	var c = 30;
	console.log(c.toString());
}());

// 闭包
var d = 40;

function f2() {
	d++;
	console.log(d.toString());
}

f2(); // 41
f2(); // 42

var result = [];
for (var i = 0; i < 5; i++) {
	var i1 = 100;
	(function(a) {

		result.push(function() {
			return a
		});
	}(i));
}
console.log(result[1]()); // 1 
console.log(result[3]()); // 3
console.log(i + '没有{}作用域' + i1); // 3 

// 对象
var jane = {
	name: "Jane",
	describe: function(argument) {
		return 'Person named ' + this.name;
	}

};
console.log(jane.name);
console.log(jane.describe());
// in 
if (!('newProperty' in jane)) {
	jane.newProperty = 'abc';
}
console.log(jane.newProperty); // abc
// delete 
if ('newProperty' in jane) {
	delete jane.newProperty;
}
console.log(jane.newProperty); //undefined

// 方法bind
var jane2 = {
	name: 'xiaoming'
};
var func2 = jane.describe.bind(jane2);
console.log(func2() + 10000);

function Man(name, age) {
	this.name = name;
	this.age = age;
}
Man.prototype.describe = function(newName) {
	var originName = this.name;
	this.name = newName;
	console.log('My name is ' + this.name + '\noriginName is ' + originName + '\nmy age is ' + this.age);
}

var 小明 = new Man('小明', 23);
小明.describe("xiaoming");

// this
(function() {
	console.log(12);
}());

// 数组
var arr = [1, 2, 3, 4];
arr[3] = 10;
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
} // 1,2,3,10

arr.forEach(
	function(elem, index) {
		console.log(index + ":" + elem);
	}
);
// 0:1
// 1:2
// 2:3
// 3:10


(function() {
	console.log('理解原型prototype');

	function Woman(name, age) {
		this.name = name;
		this.age = age;
	}
	var 小红 = new Woman('小红', 20);
	var 小米 = {
		name: '小米米'
	}
	console.log(typeof 小红 + '=====' + typeof 小米);
	console.log(typeof Object);
	console.log(typeof Object.prototype.prototype);
	console.log(typeof Number + "====" + typeof Number.prototype);
	var a = Number(30);
	console.log(a.toString() + typeof a.name);
	console.log(Woman.prototype + 小红.prototype + 小红.age + 小米.prototype + 小米.name);
	var x = 3;
	var y = Number(3);
	if (x == y) {
		console.log("x == y");
	}
	if (x === y) {
		console.log("x === y");
	}
	console.log(typeof x + typeof y);


}());


(function() {
	// body...
}());


(function() {
	// body...
}());

(function() {
	// body...
}());