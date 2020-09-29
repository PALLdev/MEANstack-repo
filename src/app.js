// SOLO MODULOS RELACIONADOS AL APP ()
const express = require('express');
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

// VARIABLE DE ENTORNO Q TOMA EL VALOR DEL PUERTO SI HA SIDO DEFINIDO EN ESTE PC, PARA ESTA APLICACION,
//  O USA EL PUERTO 1503 SI NO (Q ASIGNE COMO DEFAULT)
app.set('port', process.env.PORT || 1503)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;