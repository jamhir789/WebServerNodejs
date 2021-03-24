require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });



//Servir contenido
app.use(express.static(__dirname + '/public'))
// app.get('/', (req, res)=> {
//     let salid ={
//         nombre:'erick',
//         edad:34
//     }
//   res.send(salid);
// })

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Eriick medina',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Eriick medina',
    titulo: 'Curso de Node'
  })
  // res.sendFile(__dirname + '/public/generic.html');
})
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Eriick medina',
    titulo: 'Curso de Node'
  })
  // res.sendFile(__dirname + '/public/elements.html');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});