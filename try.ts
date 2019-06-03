// 将一个联合类型的变量指定为一个更加具体的类型
function getLength(something: string | number): number {
    if ((something as string).length) {
        return (something as string).length;
    } else {
        return something.toString().length;
    }
}

const len = getLength(121354);
console.log(len);
// var a = 10 
// var result = ( a<10 && a>5)
// // console.log(result);
// // function buildName(firstName: string, lastName?: string) {
// //     if (lastName)
// //         return firstName + " " + lastName;
// //     else
// //         return firstName;
// // }
 
// // let result1 = buildName("Bob");  // 正确
// // let result3 = buildName("Bob", "Adams");  // 正确
// var myFunction = new Function("a", "b", "return a * b"); 
// var x = myFunction(4, 3); 
// console.log(x);
// let aa = 0;
// let str = '';
// function factorial(number: number):number {
//     aa++;
//     if (number <= 0) {         // 停止执行
//         return 1; 
//     } else {
//         str+=`${number * factorial(number - 1)},`
//         return (number * factorial(number - 1));     // 调用自身
//     } 
// }; 
// console.log(factorial(6), aa, str);      // 输出 720

// function disp(s1:string):void;
// function disp(n1:number,s1:string):void;

// function disp(x:any,y?:any):void {
//     console.log(x);
//     console.log(y);
// }
// disp("abc");
// disp(1,"xyz");
// var month = 0 
// if( month<=0 || month >12) { 
//     month = Number.NaN 
//     console.log("月份是："+ month) 
// } else { 
//     console.log("输入月份数值正确。") 
// }
// /// <reference path = "./index.ts" /> 
// console.log(Children);