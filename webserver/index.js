const http = require('http')
const fs = require('fs')

const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8')
const detailPage = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8')

const server = http.createServer(function(req,res){
    const pathname = req.url
    console.log("url = ",pathname)
    if(pathname==="/"||pathname==="/home"){
        res.end(indexPage)
    }
    else if (pathname==="/detail") {
        res.end(detailPage)
    }
    else{
        res.writeHead(404)
        res.end("<h1>404 Not Found</h1>")
    }

})
server.listen(3000,()=>{
    console.log("start server in port 3000")
})