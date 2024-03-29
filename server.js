const express = require('express')
const cors = require('cors');
const mysql = require('mysql')
const myconnection = require('express-myconnection')


const rutaPersonal = require('./rutas/personal')
const rutaLogin = require('./rutas/login')
const rutaProveedor = require('./rutas/proveedores')
const rutaPeces = require('./rutas/registroPeces')
const rutaPila = require('./rutas/pilas')
const rutaAlimento = require('./rutas/alimento')
const rutaMortalidad= require('./rutas/mortalidad')
const rutaVentas = require('./rutas/ventas')
const rutaProductos = require('./rutas/producto')
const rutaCompras = require('./rutas/compras')
const rutaComprasProductos = require('./rutas/compraproductos')
const rutaInventario =  require('./rutas/inventario')
const rutaConsumo = require('./rutas/consumos')
const rutaEntrada = require('./rutas/entradas')
const rutaSalida = require('./rutas/salidas')
const rutaActualizarXfrom = require('./rutas/actulizarXfrom')

const app = express()


app.set('port', process.env.PORT || 3000)

app.use(express.json())


app.use('/personal', rutaPersonal)
app.use('/login', rutaLogin)
app.use('/proveedor', rutaProveedor)
app.use('/peces', rutaPeces)
app.use('/pilas', rutaPila)
app.use('/alimento', rutaAlimento)
app.use('/mortalidad', rutaMortalidad)
app.use('/ventas', rutaVentas)
app.use('/productos', rutaProductos)
app.use('/compras', rutaCompras)
app.use('/compraProductos', rutaComprasProductos)
app.use('/inventario', rutaInventario)
app.use('/consumos', rutaConsumo)
app.use('/entrada', rutaEntrada)
app.use('/salida', rutaSalida)
app.use('/actualizaInv', rutaActualizarXfrom)

app.listen(app.get('port'), () => {
    console.log('Server runing')
})