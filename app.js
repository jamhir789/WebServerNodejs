// const http = require('http');


// //SERVIR CONTENIDO ESTATICO
// app.use(r)
// http.createServer((req,res)=>{
   
//     res.writeHead(200,{'Content-Type': 'application/json'});
// let salid ={
//     nombre:'Erick',
//     edad:32,
//     url:req.url
// }
//     // res.write('hola mundo');
//     res.write(JSON.stringify(salid))
//     res.end();
// }).listen(8080);

// console.log('escuchando');

const express = require('express')
const app = express()
 
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res)=> {
    let salid ={
        nombre:'erick',
        edad:34
    }
  res.send(salid);
})
 
app.listen(3000);