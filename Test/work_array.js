const data1 = [100,200,300]
const data2 = [400,500,600]
console.log(data1);
console.log(data1.join("/")); //แปลงarray เป็น string
console.log(data1.concat(data2));//เอาขเอมูลมาต่อกัน

///////////////////////// push,pop,shift/unshift/////////////////////

console.log(data2);
data2.push(700) //เพิ่มสมาชิก
console.log(data2);

data1.pop() //ลบสมาชิกตัวหลังสุด
console.log(data1);

data1.shift() //ลบสมาชิกตัวหน้า
console.log(data1);

data2.unshift(50) //เพิ่มสมาชิกตัวหน้า
console.log(data2);

///////////////////////////////splice & slice///////////////////////////

data2.splice(2,2,450) //(เริ่มลบตัวที่ , จำนวนที่ลบ , ***แทรกไปในต่ำแหน่งที่ลบ)
console.log(data2); 

selectData = data2.slice(1,3) //ดึงข้อมูล (ตำแน่งแรกที่ต้องการ , ตำแหน่งท้าย -1) ***ต้องมีตัวแปรมารับค่า
console.log(selectData); 

////////////////////////////// Loop Array ///////////////////////

//normal loop
for(let i = 0;i<data2.length;i++){
    if (data2[i]>450) break
    console.log(`ลำดับที่ ${i} = ${data2[i]}`);
}

//forEach
let sum = 0
data2.forEach(element =>{
    sum += element
    console.log(`sum = ${sum}`); //ใช้ break , continue ไม่ได้
})

//for-of

for (const element2 of data2){
    console.log(`for of = ${element2}`); //รวม normal,foreach ไว้ด้วยกัย สามารถใช้ break , continue ได้
}

///////////////////////////// หาข้อมูลใน Array //////////////////////////////

//indexof(ข้อมูล) > จะหาตำแหน่ง index ของข้อมูลนั้นถ้าไม่เจอจะ -1

//find(ข้อมูล) > ผลจะได้ข้อมูล ถ้าไม่เจอจะได undefined

//findIndex(ข้อมูล) > จะหาตำแหน่ง index ของข้อมูลนั้นถ้าไม่เจอจะ -1
