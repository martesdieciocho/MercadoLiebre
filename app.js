// Requiere el módulo Express
const express = require('express');
//Ejecutar Express

const app = express();

// Requerir path para la ruta absoluta del sendFile
const path = require('path');


//Permite mostrar las imagenes y estilos del proyecto
app.use(express.static('public'));

//Levantar el servidor. Solicita puerto y un callback que llame un console log

app.listen(process.env.PORT || 3000, () => console.log('Server runing...'));

app.get('/' , (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/login' , (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/register' , (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})





