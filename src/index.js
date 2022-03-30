const express = require('express')
const app = express()

// Configuración
app.set('port', process.env.PORT || 3001)
app.use(express.json())

// Rutas
app.use(require('./routes/personas/get'))
app.use(require('./routes/personas/post'))
app.use(require('./routes/personas/put'))
app.use(require('./routes/personas/delete'))

app.use(require('./routes/citas/get'))
app.use(require('./routes/citas/post'))
app.use(require('./routes/citas/put'))
app.use(require('./routes/citas/delete'))

app.use(require('./routes/almacen/get'))
app.use(require('./routes/almacen/post'))
app.use(require('./routes/almacen/put'))
app.use(require('./routes/almacen/delete'))

// Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port: ${app.get('port')}`)
})
