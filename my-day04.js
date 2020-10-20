/**
 * 
 * 
 * 
 */
//字面量
let a = "xiao",
    b = "xiao1",
    c = 'adc' //字符串字面量

const oArray = []; //数组字面量

const oObject = {}; //对象字面量

//const oReg = \adc\;   正则表达式字面量

//声明函数
function hello() {
    console.log('hello,function!');
}
console.log(hello);
hello();


//定义一个函数表达式
//匿名函数
const hello = function() {
    console.log('hello,js');
};
hello(); //调用

//命名函数
const hello = function sayHello() {

}
hello();

console.log(typeof hello);


//Function() 构造函数  --了解，不建议使用

const hello = new Function("console.log('hello,js!')");


//箭头函数 ES6才有的。
const hello = () => {
    console.log('hello,js');
};



//返回值
//如果没有return，或者return后面为空，函数的返回值就为undefined
let sayHello = function () {
    return;
}
console.log(sayHello());


//举例
sum1(1, 2);
sum2(1, 2, 3);
sum3(1, 2, 3, 4);

function sum1(a, b) {
    return a + b;
};


function sum2(a, b, c) {
    return a + b + c;
};

function sum3(a, b, c, d) {
    return a + b + c + d;
};

function sayHello(){

}
//如果调用的时候不提供实际参数，那么形参就会赋值为undefined
let add= function(a,b){
    return a+b;
};
console.log(add());//调用,输出结果是NaN，意思是not a number

let a = Infinity;
let b = Infinity;

console.log(1+true); //输出为2

const add = function(a,b){ //定义
    return a+b;
}
console.log(add(1,2,3,4,5));

const add1 = function(){
    if (arguments.length == 0){
        return 0;
    }else if (arguments.length == 1){
        return arguments[1];
    }else if (arguments.length == 2){
        return arguments[0] + arguments[1];
    }
};
console.log(add1(1,8));


const add2 = function(...number){   //尽量用这种
    let sum = 0;
    console.log(typeof numbers)
    console.log(arguments instanceof Array)
    for (const num of numbers){
        sum = num + sum;
    }
    return sum;
}
a= add2(1,1,2,2,3,4);
console.log(a);



const add3 = function(){
   let sum = 0;
   for (const num of arguments){
       sum = sum + num;
   }
        return sum;
};
b = add3() //调用的值赋给一个变量
console.log(b);



const myname = function(b,a = 'xiao'){
    return b + a;
}
console.log(myname("hello"));

//箭头函数不能使用argument、super、new.target,也不能用作构造函数。
const sayHello = () => {
    return 'hello,javaScript!';  //一条语句return可以去掉
}

const sayHello = () => 'hello,javaScript';
console.log(sayHello());

const sayHello2 = a => { //a是个参数
    'hello'+a;
}


const sayHello3 = (a,b) => {
    a+b;
}
const sayHello3 = (a,b) => a+b;



//回调
let dance = function dance(){
    console.log("我在跳舞！");
}
function sing(song,callback){
    console.log('我在唱' + song);
    if((typeof callback) == 'function'){
        callback();
    }
}
sing('Love on top',dance);

//用箭头函数写刚刚的那个回调
const dance = () => {
    console.log("我在跳舞！");
}
const sing = (song,callback) => {
    console.log('我在唱' + song);
    if((typeof callback) == 'function'){
        callback();
    }
}
sing('Love on top',dance);



const sing = (song,callback) => {
    console.log('我在唱' + song);
    callback(); //显示调用它
    }
sing('生日快乐歌',() => {console.log('我在跳舞')})


//数组排序,Array.sort()
const a1 = [1,3,2,10,25]
const a2 = a1.sort()
console.log(a2)

const num = (a,b) => a-b;
const a3 = a1.sort(num);
console.log(a3)

//Array.forEach()
const oArray1 = [1,2,3,4]
const oArray2 = [];
for (let i = 0;i< oArray1.length;i++){
    oArray2[i] = oArray1[i] + 1;
}
console.log(oArray2);


const oArray2 = [1,2,2,4]
//const sum = (a) => a+1;
for (const i of oArray2){
    console.log(i)
}
//const oArray2 = oArray1.forEach(sum);

const oArray3=[1,2,4,5,6]
const OA = oArray3.forEach((arr1)=>{console.log(arr1)})

//Array.map() 映射
const oArray4 = [1,2,3,4,5]
const sum = (a) => a+2;
const oArray5 = oArray4.map(sum);
console.log(oArray5)

const oArray4 = [1,2,3,4,5]
const sum = (a) => a*a;
const oArray5 = oArray4.map(sum);
console.log(oArray5)

// reduce

const oArray1 = [1,2,3,4,5].reduce((acc,val) => acc + val);
console.log(oArray1);

const oArray1 = [1,2,3,4,5]

const oArray2 = oArray1.reduce(
    (acc,curVal) => acc + curVal
)
console.log(oArray2)

const oArray3 = [1,2,3,4,5].reduce((acc,val) => acc + val, 10);
console.log(oArray3)


const sentence = 'The quick brown fox jumped over the lazy dog';
const words = sentence.split(" ");
console.log(words);
const total = words.reduce((acc, word) => acc + word.length, 0);
console.log(total);

// filter
const a1 = [1,2,3,12,8];

const a2 = a1.filter((x)=> x%2 ===0);
console.log(a2);

console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ))







