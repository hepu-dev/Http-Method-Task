const http = require('http');
const fs = require('fs');

function onRequest(request, Response){
    Response.writeHead(200, {"content-Type": 'text/html'})
    fs.readFile('./index.html', null, (error, data) => {
        if(error){
            Response.writeHead(404)
            Response.write('file not found')
        }else{
            Response.write(data)
        }
        Response.end()
    })
}

function onRequest2(request, Response){
    Response.writeHead(200, {"content-Type": 'application/json'})
    const data = {
        name: "heru Purnama",
        age : 22,
        kelas : "synrgy FSW"
    }
    Response.end(JSON.stringify(data))
}    

console.log("running server")
http.createServer(onRequest).listen(10)
console.log("running server 2")
http.createServer(onRequest2).listen(100)