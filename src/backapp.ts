import express from 'express';
import {Producto}  from './models/producto'; 
const app = express();
const productos: Producto[] = [
    { nombre: "Camiseta", precio: 15.99, cantidad: 10 },
    { nombre: "Pantalón", precio: 29.99, cantidad: 5 },
    { nombre: "Zapatos", precio: 49.99, cantidad: 8 },
    { nombre: "Gorra", precio: 9.99, cantidad: 12 },
    { nombre: "Bufanda", precio: 14.99, cantidad: 7 }
];
 
/*  DotEnv  */
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
 
app.get('/', (req, res) => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
 
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
