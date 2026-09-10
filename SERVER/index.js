const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url} New Req received\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("Home");
                break;
                case "/about":
                    res.end("I am vanshika");
                    break;
                    default:
                        res.end("404 Not found");
        }
    })
    // res.end("Hello from Server");
});
myServer.listen(8000,()=>console.log("Server started"));