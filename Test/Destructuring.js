

const colors = ["red","green","yellow"]
//Original
const r1 =colors[0]
const g1 =colors[1]
const y1 =colors[2]

//destruct
const [r,g,y] = colors //เหลือบรรทัดเดียว

const product = {
    name : "Computer",
    price : 30000,
    stock : 10
}

const {name,price,stock}= product

console.log(r)
console.log(name);
