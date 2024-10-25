const express = require('express');
const cookieParser = require('cookie-parser');
//controlador con CRUD
const controladorTienda = require('../controllers/tienda.controller');

//config inicial servidor
const app = express();
app.use(express.json());
app.use(cookieParser());

//Endpoints Tienda

app.post('/tienda', controladorTienda.crearTienda);

app.get('/tienda', controladorTienda.listarTiendas);

app.delete('/tienda/:id', controladorTienda.eliminarTiendaPorId);

app.put('/tienda/:id', controladorTienda.actualizarTienda);

app.get('/tienda/:id', controladorTienda.obtenerTiendaPorId);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});

// hacer funcionar el FRONT (LOGIN + redireccion a index (ver producto))