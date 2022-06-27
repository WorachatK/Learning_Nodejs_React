//non-Blocking
const fs=require('fs')

//read Input.txt
fs.readFile("ModuleFS/myfile/input.txt",'utf-8',(err,data)=>{
    if(err) return console.log("ERROR",err)
    const outputText = `Hello everyone \n${data} \nthia file craet when ${new Date()}`
    fs.writeFile("ModuleFS/myfile/output.txt",outputText,err=>{
        if(err) return console.log("ERROR",err)
        console.log("Finish");
    })
})

console.log("finish")