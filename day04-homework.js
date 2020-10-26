/**
 * 
 小明和他家人在泰国旅游，到3个不同的饭店吃饭。账单(bill) 分别是124元、48元
和268元。
为了给服务员小费(tip)，小明创建了一个简单的小费计算器函数(tipCalculator) 。
如果账单小于50元，他会给账单的20%作为小费;如果账单在50到200元之间，他会给账单的15%作为小费；
如果账单超过200元，他会给账单的10%作为小费。
小明想要2个数组: 
1) 一个数组包含所有三个小费(每个账单一个) ;
2)一个数组包含所有三个最终支付的金额(账单+小费)。
最后把这2个数组输出到控制台。
 */

const tipCalculator = bills => {  
    const tips = []
    const costs = []
    bills.forEach(bill => {
        let tip;
        if (bill < 50){
            tip = bill * 0.2
        }else if (bill >= 50 && bill < 200){
            tip = bill * 0.15
        }else{
            tip = bill * 0.1
        }
        const cost =  bill + tip
        tips.push(tip)
        costs.push(cost)
    })
    console.log(tips,costs)
}
tipCalculator([124,48,268])
  
  
  
  //work2
  //作业2 
//原函数
function mean(a, b, c) {
    return (a + b + c) / 3;
}

//要求1:要求任意个数的数字的平均值，求改进后代码
const mean1 = (...numbers) => {
    let l = numbers.length;
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    let Avg = sum / l;
    console.log(Avg);
}
mean1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//要求2:使用reduce()函数精简
const mean2 = (numbers) => {
    let l = numbers.length;
    let Avg = numbers.reduce((numbers, sum) => numbers + sum) / l;
    return Avg
}
console.log(mean2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//要求3:只对数组中的偶数品平均数
const asd = []; //新数组存储偶数
const mean2 = () => {
    let l = asd.length;
    let Avg = asd.reduce((asd, sum) => asd + sum) / l;
    console.log(Avg)
} //求平均值
const mean3 = (arr1, callback) => {
    const arr2 = arr1.map((sum) => {
        if (sum % 2 == 0) {
            return sum
        }
    }) //取偶数
    // const asd = [];
    arr2.forEach(
        item => {
            if (item) {
                asd.push(item)
            }
        }
    ) //偶数组成新的数组
    if (typeof (callback) === "function") {
        callback()
    } //回调mean2()
}
mean3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mean2)