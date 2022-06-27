//Promise
const connect = true //เช็คว่าต่อเน็ต
const url1="kong.dev/file1.json"
const url2="kong.dev/file2.json"
const url3="kong.dev/file3.json"
const url4="kong.dev/file4.json"
const url5="kong.dev/file5.json"



function dowloading(url){
    return new Promise(function(resolve,reject){
        console.log(`กำลังโหลดไฟล์จาก ${url}`)
        setTimeout(() => {
            if(connect){
                resolve(`Load ${url} Complete`)
            }
            else{
                reject('ERROR')
            }
        }, 1000);
    })
}
//Async & Await
async function start(){
    console.log(await dowloading(url1))
    console.log(await dowloading(url2))
    console.log(await dowloading(url3))
    console.log(await dowloading(url4))
    console.log(await dowloading(url5))
}

start()

// promise
// แบบที่1
// dowloading(url1)
// .then(function(result){
//     console.log(result)
//     return dowloading (url2)
// })
// .then(function(result){
//     console.log(result)
//     return dowloading (url3)
// })
// .then(function(result){
//     console.log(result)
// })

// แบบที่2
// dowloading(url1).then(function(result){
//     console.log(result)
//     dowloading(url2).then(function(result){
//         console.log(result)
//         dowloading(url3).then(function(result){
//             console.log(result)
//         })
//     }) 
// })
// dowloading(url1).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log(`Finish`)
// })

