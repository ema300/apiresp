const express = require('express');
const cors = require('cors');
const db = require('./config/conexion');
 
const app= express();
 
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
const PORT = process.env.PORT || 3000 ;
 
app.use(cors()); //para evitar conflictos con un frontend
 
//API REST
 
app.get('/dispositivo',(req,res)=>{
db.query('SELECT * FROM dispositivo',(err,datos) => {
    if(err){
        return err
    }
    //res.json({dispositivo:data})
    res.json(
        {
            mensaje:'resultados',
        datos
    })
})

})
 
 //insertar

 app.post('/dispositivo',(req,res)=>{
    //console.log(req.body) //lo que se envio ver por consola
    console.log(Object.values(req.body))// lo que se envio ver por consola
const values = Object.values(req.body);
const sql='INSERT INTO dispositivo(nombre_dispositivo,accion) VALUES(?,?)';
db.query(sql,values,(err,dato) => {
    if(err){
        return err
    }
    res.json(
        {
            mensaje:'dispositivo agregado',
        dato
    })
})

})
 
 //ver un dispositivo en particular

 app.get('/dispositivo/:id}}', (req,res) => {

    console.log(req.params.id)
    const ID = req.params.id; //capturar el ID
    console.log(ID)
    const sql='SELECT * FROM dispositivo WHERE id = ? ';

  db.query(sql,[ID],(err,dato) => {
    if(err){
        return err
    }
    res.json(
        {
            mensaje:'detalles',
        dato
    })
})

})


app.listen(PORT, () =>{
    console.log('servidor ejecutandose en el puerto: '+PORT)
}
 
)