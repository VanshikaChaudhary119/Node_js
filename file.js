const fs = require('fs');

//Sync 
// fs.writeFileSync("./test.txt","Hello world");

// async
// fs.writeFile("./test.txt","Hello world hii",(err)=>{

// });

// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })

fs.appendFileSync("./test.txt","Hey there\n")

// fs.copyFileSync("./test.txt","./copy.txt")

// fs.unlinkSync("./copy.txt")

fs.mkdirSync("my-docs");