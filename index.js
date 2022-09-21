const express = require('express');
const cors = require('cors');
const db = require('./config/conexion');
 
const app= express();
 
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
const PORT = process.env.PORT || 3000;
 
app.use(cors()); //para evitar conflictos con un frontend
 
//API REST
 
app.get('/productos',(req,res)=>{
    res.json({
        mensaje:'frutas',
        cantidad:58
    })
})
 
 
 
 
/*app.listen(PORT, () =>{
    console.log('servidor ejecutandose en el puerto: '+PORT)
}
 
)*/

