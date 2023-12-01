const f =require('fs')
//console.log(f)
// f.readFile(__dirname+"/hello.txt","utf-8",(err,data)=>{ //utf8 file
//     //if(err) throw err;
//     console.log(data);
    
// });
// console.log("hello gwalior")
// const data =f.readFileSync(__dirname+"/hello.txt","utf-8");
// console.log(data);
// console.log("hello gwalior");
try {
    const data =f.readFileSync(__dirname+"/hello.txt","utf-8");
    console.log(data);
    }catch (error){
        console.log(error)
    }
    console.log("hello gwalior");