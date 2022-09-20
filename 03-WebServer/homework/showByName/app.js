var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
//request - que solicitud llega y res, que respondo
http.createServer((req, res)=>{

 /*    res.writeHead(200,{"Content-Type" : "Text/plain"})
    res.end("todo okk")  /* */    /*ese cod es para levantar el local host y ver que ande */

    console.log(req.url)
/* if(req.url === "/arcoiris_doge"){
    fs.readFile("./images/arcoiris_doge.jpg", (err,data)=>{
        if(err){
            res.writeHead(404,{"Content-Type" : "Text/plain"})
            res.end("el perrito no esta disponible")
        }else {
            res.writeHead(200,{"Content-Type" : "image/jpeg"})
            res.end(data)
        }
    })
} */

/* dejamos comentado porque no es escalable, necesitariamos hacer uno de estos por cada imagen
 y se haria eterno 
 por ende haruamos un codigo asi*/

fs.readFile(`./images${req.url}.jpg`, (err,data)=>{/* de esta forma,paramos req url como data para la busqueda */
    if(err){
        res.writeHead(404,{"Content-Type" : "Text/plain"})
        res.end("este perrito no esta disponible")
    }else {
        res.writeHead(200,{"Content-Type" : "image/jpeg"})
        res.end(data)
    }
})

    
}).listen(3001, ()=> console.log("runnung on port 3001"))