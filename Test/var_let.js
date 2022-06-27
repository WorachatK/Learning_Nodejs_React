//block Scope (let/constant)

//Original

var x= 30
if (x===30){
    var y = 500
    console.log("y ใน="+y);
}
console.log("y นอก="+y); //ไม่อยากให้เอาออกมาใช้ข้างนอก if

//New
let z= 30
let s= 1000 //ต้องสร้างข้างนอกมารับค่า
if (z===30){
    let s = 500
    console.log("s ใน="+s);
}
console.log("s นอก="+s); //ถ้าใช้ let ตัวแปรจะออกมาข้างนอกไม่ได้

