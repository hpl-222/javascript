let person = new Object();
person.name = 'xjc';  //定义属性
person.age = 43;
console.log(person.name)   //输出



//对象字面量
let person1 = {};
person1.name = 'xjc';
person1.age = '49';



let person2 = {
    name: 'xjc',
    age: 49,
   // getUserName:function()  //加入函数
};
    console.log(person2.age)
    console.log(typeof person2); //object




    //数组
    const oArray = new Array();

    const OArray = []; //中括号——数组
    console.log(typeof oArray);


//数组初始化
const heroes = [];
console.log(heroes[0]);
heroes[0] = '蝙蝠侠';
heroes[1] = '神奇女侠';
console.log(heroes);



//数组字面量
let person2 = {
    name: 'xjc',
    age: 49,
   // getUserName:function()  //加入函数
};
const a = [0,undefined,'123456',null,person2];
console.log(a);
delete a[0]; //删除第一个
console.log(a);



//结构语法
const array1 = [1,2,3];
let a = array1[0];
let b = array1[1];
let c = array1[2];

//用结构语法就会简洁方便
const [a,b,c] = [1,2,3];
console.log(`a=${a},b=${b},c=${c}`)  //模板字符串

const [a,b] = [1,2,3];
console.log(a);

const odivas =  ['mc','cd','wh'];
console.log(odivas.length);
odivas.length = 6;
console.log(odivas);


const odivas =  ['mc','cd','wh','jt'];
odivas.pop(); //删除栈顶部的元素(最后一个元素)
console.log(odivas);
odivas.push('麦当娜');  //添加一个
console.log(odivas);


const odivas =  ['mc','cd','wh','jt'];
console.log(odivas.shift());  //删除第一个元素，栈底部的元素
console.log(odivas);
odivas.unshift('牛姐');  //添加第一位元素，从左到右第一个
console.log(odivas);

//扩展运算符
const odivas =  ['mc','cd','wh','jt'];
const mdivas = ['碧昂丝','bs','ak'];
const oArray = [...odivas,...mdivas]; //两个数组合并最简单的方法
console.log(oArray);


//join   数组变成字符串
const odivas =  ['mc','cd','wh','jt'];
const a = odivas.join(`&`); //用&符号分割
console.log(a);


const odivas =  ['mc','cd','wh','jt'];
const b = odivas.slice(2,4) //数组切片，且不包含2和4
console.log(b);
console.log(odivas);  //原来数组不会变




const odivas =  ['mc','cd','wh','jt'];
const c = odivas.splice(2,2,'xjc',2); //切片&插入
console.log(c);
console.log(odivas); //原来的数组会变



const d = [a,b,c,d];
const e = d.reverse(); //排序--倒序
console.log(e,d);

const f = [1,2,3,4];
const g = f.sort();  //排序
console.log(g,f);


const odivas =  ['mc','cd','wh','jt'];
const a1 = odivas.indexOf('mc1');
console.log(a1);



//多维数组
const ma = [[1,2],[3,4]];
console.log(ma[0][0]);

const summer = ['Jun', 'Jul', 'Aug']; 
const winter = ['Dec', 'Jan', 'Feb']; 
const nested = [ summer, winter ]; 
console.log(nested);

const flat = [...summer, ...winter];
console.log(flat);


//set 
const list = new Set();
list.add(1);
list.add(2).add(3).add(4).add(5);
list.add(5);
console.log(list);


//数组去重
const a = [1,2,1,2,3,2,5,23,5,6]
const b = new Set(a); //集合不能包括重复对的元素
console.log(b);  

const c = new Set('hello');
console.log(c);

/**
 * 
 * 长注释
 */

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.size);
list4.size = 6;                 //不会改变，只读
console.log(list4);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.has('brown'));  //判断是否存在
list4.delete('the')    //删除元素
console.log(list4);


const list4 = new Set().add('the').add('quick').add('brown').add('fox');
list4.clear();  //清空集合
console.log(list4);  //空集

let array = [1,2,3];
let array2 = [3,4,5];
const weak = new WeakSet().add(array).add(array2);  //不会存在内存泄漏
console.log(weak);
array = null;
array2 = null;
const array3 = [...weak][0];
const array4 = [...weak][1];
console.log(array3);
console0log(array4);

// 内存泄漏
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const strong = new Set().add(array1).add(array2); 
console.log(strong.has(array1));
array1 = null; // 删除对原始对象的引用
array2 = null;
array3 = [...strong][0]; 
array4 = [...strong][1];
console.log(array3);
console.log(array4);

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const weak = new WeakSet().add(array1).add(array2);
console.log(weak);
array1 = null;
array2 = null;
const array3 = [...weak][0];
const array4 = [...weak][1];
console.log(array3);
console.log(array4);


// map
const romanNumerals = new Map(); 
romanNumerals.set(1,'I'); 
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
console.log(romanNumerals);
console.log(romanNumerals.size);
console.log(romanNumerals.get(3));
console.log(romanNumerals.has(5));
romanNumerals.delete(5);
console.log(romanNumerals);
romanNumerals.clear();
console.log(romanNumerals);

// map to array

const romanNumerals = new Map(); 
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
const oArray1 = [...romanNumerals];
const oArray2 = Array.from(romanNumerals);
console.log(oArray1);
console.log(oArray2);




//map，映射
const zwsz = new Map();
zwsz.set(1,'一');
zwsz.set(2,'二').set(3,'三');
console.log(zwsz);    


//map to array ，转换成数组
const zwsz = new Map();
zwsz.set(1,'一');
zwsz.set(2,'二').set(3,'三').set(4,'四');
const oArray1 = [...zwsz];
const oArray2 = Array.from(zwsz);   
console.log(oArray1);
console.log(oArray2);      



//review
/*
 数据类型
    基础类型：String、Number Boolean Symbol undefined null
    引用类型：Object/Function

两种：
对象构造函数
let oStudent = new Object();

对象字面量
let oStudent = {
    name: 'xaaaa',
    age: 21
}

oStudent.name

Array
   new Array()
   []
   

Set
  let oSet = new Set();
  oSet.add(1).add(2)
  let oSet = new Set([1,2,3]);



*/

