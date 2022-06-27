///////////////////////////////////////////Array map//////////////////////////////////////////////

const numbers= [10,20,30,40]

const result = numbers.map(e=>e*2)//เอาข้อมูลแต่ละตัวมาทำตามที่กำหนด [10*2,20*2,30*2,40*,]

const data = ["ฝนตก","เมฆหนา","แดดออก","หิมะตก","อากาศดี",]

const weater = data.map((e,i)=>{
    return `day ${i+1} สภาพอากาศ${e}`
})

console.log(numbers);
console.log(result);
console.log(weater);

/////////////////////////////////////////////Filter/////////////////////////////////////////////

const fill = numbers.filter(e=>e>20)

console.log(fill);

///////////////////////////////////////////Reduce/////////////////////////////////////////////

//array.reduce((ค่าที่ถูกประมวลผล,element)=>{},ค่าเริ่มต้น) //value = 0
const reduceNum = numbers.reduce((value,e)=>{
    const total = e+value
    return total //จะส่งค่าสุดท้ายเท่านั้น 
},0)

console.log(reduceNum);