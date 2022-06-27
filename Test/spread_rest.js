//Spread

const newArray = [100,200,300]
const data = [10,20,...newArray] //(...)คือ spread operator กระจายอาเรย์เข้าสู่ดาต้า
const newdata = [400,500]

data.push(...newdata)

console.log(data);

//Rest parameter

summation = (...numberArr)=>{
    let total = 0
    for(let number of numberArr) total += number
    return total
}

console.log(summation(50,100));