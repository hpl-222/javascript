//变量存储Mark和John的体重以及身高
let MarkMass = 150;
let MarkHeight = 170;
let JohnMass = 120;
let JohnHeight = 170;

//计算二人的BMI
console.log("Mark的BMI:")
let BMI1 = MarkMass/(MarkHeight*MarkHeight)
console.log(BMI1.toPrecision(1))
console.log("John的BMI:")
let BMI2 = JohnMass/(JohnHeight*JohnHeight)
console.log(BMI2.toPrecision(1))
//输出
console.log('Mark的BMI是否比John更高？')
if(MarkHeight>JohnHeight){
    console.log('ture')
}
else{
    console.log('fales')
}