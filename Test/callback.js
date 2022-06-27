//โปรแกรมดาวโหลดไฟล์
const url1="kong.dev/file1.json"

function dowloading(url,callback){
    console.log(`กำลังดาวโหลด ${url}`)
    setTimeout(() => {
        callback(url)
    }, 3000);
}

function complete(result){
    console.log(`Dowload ${result} Complete`)
}

dowloading(url1,complete)