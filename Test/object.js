//Object

//ตัวแปรเก็บข้อมูล
const username = "OHM"
const age =25
const address ="Ninthaburi"
const phone = "0619759598"

const customer = {
    name : username,
    age,
    address //ถ้าชื่อตัวแปรเหมือนกันเขียนแค่ชื่อตัวแปรได้
}

console.log(customer)

//ทำงานกับ String
const custom = `ชื่อลูกค้า : ${username}
ทีอยู่ : ${address}
เบอร์ติดต่อ : ${phone}`

console.log(custom);