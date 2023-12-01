const h = require('http')
//console.log(h)

//create server
h.createServer((req,res)=>{
    res .write(("WELCOME Node js"))
    res.end()
}).listen(3000, () => console.log("server is running localhost:3000"))
//localhost:3000/