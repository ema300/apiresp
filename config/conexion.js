//conexion a BBDD
const mysql = require('mysql');
 
const conexion = mysql.createConnection(
    {
host:'localhost',
user:'root',
password:'root',
database: 'apirest_db'
}
 
);
 
//chequeo de conexion
 
conexion.connect((err) => {
    if(err){
       console.log('Error BBDD: ', err);
       return err;
    }
    console.log('Conexion exitosa');
}
 )

 module.exports = conexion;