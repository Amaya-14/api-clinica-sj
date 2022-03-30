const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// obtener todos los medicamentos
router.get('/mostrar/medicamentos', (request, response) => {
  const sql = 'CALL sp_alm_select_inventario("medicamentos",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un medicamento por su código
router.get('/mostrar/medicamentos/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_alm_select_inventario("medicamento",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos todo el inventario de todos los medicamentos
router.get('/mostrar/inventario/medicamentos', (request, response) => {
  const sql = 'CALL sp_alm_select_inventario("inventarioMedicamentos",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un inventario de un medicamento por su código
router.get('/mostrar/inventario/medicamentos/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_alm_select_inventario("inventarioMedicamento",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los materiales
router.get('/mostrar/materiales', (request, response) => {
  const sql = 'CALL sp_alm_select_inventario("materiales",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un material por su código
router.get('/mostrar/materiales/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_alm_select_inventario("material",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos todo el inventario de todos los materiales
router.get('/mostrar/inventario/materiales', (request, response) => {
  const sql = 'CALL sp_alm_select_inventario("inventarioMateriales",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un inventario de un material por su código
router.get('/mostrar/inventario/materiales/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_alm_select_inventario("inventarioMaterial",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los tipos de medicamentos
router.get('/mostrar/tipo/medicamentos', (request, response) => {
  const sql = 'CALL sp_alm_select_inventario("tiposMedicamentos",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un tipo de medicamento por su código
router.get('/mostrar/tipo/medicamentos/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_alm_select_inventario("tipoMedicamento",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los tipos de materiales
router.get('/mostrar/tipo/materiales', (request, response) => {
  const sql = 'CALL sp_alm_select_inventario("tiposMateriales",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un tipo de material por su código
router.get('/mostrar/tipo/materiales/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_alm_select_inventario("tipoMaterial",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todas las unidades de presentación
router.get('/mostrar/unidades/presentacion', (request, response) => {
  const sql = 'CALL sp_alm_select_inventario("unidadesPresentacion",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener una unidad de presentación por su código
router.get('/mostrar/unidades/presentacion/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_alm_select_inventario("unidaPresentacion",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

module.exports = router
