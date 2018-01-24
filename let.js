/*
 *使用立即使用函数表达式（IIFE）实现计数器
*/

var funcs = [];

for (var i = 0; i < 10 ;i++) {
	funcs.push((function(value){
		return function(){
			console.log(value);
		}
	}(i)));
}

funcs.forEach(function(func){
	func(); //输出0，然后是1、2，直到9
});

/*
 *使用let声明简化过程
 */

 var funcs = [];
 for(let i = 0; i < 10; i++){
 	funcs.push(function(){
 		console.log(i);
 	});
 }

 funcs.forEach(function(func){
 	func();//输出0，然后是1、2，直到9
 })
