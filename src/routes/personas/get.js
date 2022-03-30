const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// obetener todas las personas
router.get('/mostrar/personas', (request, response) => {
  const sql = 'CALL sp_select_persona("personas",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los pacientes
router.get('/mostrar/pacientes', (request, response) => {
  const sql = 'CALL sp_select_persona("pacientes",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un paciente por su código
router.get('/mostrar/pacientes/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_persona("paciente",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los empleados
router.get('/mostrar/empleados', (request, response) => {
  const sql = 'CALL sp_select_persona("empleados",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un empleado por su código
router.get('/mostrar/empleados/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_persona("empleado",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los telefonos
router.get('/mostrar/telefonos', (request, response) => {
  const sql = 'CALL sp_select_informacion("telefonos",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un telefono por su código
router.get('/mostrar/telefonos/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_informacion("telefono",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos las direcciones
router.get('/mostrar/direcciones', (request, response) => {
  const sql = 'CALL sp_select_informacion("direcciones",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener una dirección por su código
router.get('/mostrar/direcciones/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_informacion("direccion",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los correos
router.get('/mostrar/correos', (request, response) => {
  const sql = 'CALL sp_select_informacion("correos",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un correo por su código
router.get('/mostrar/correos/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_informacion("correo",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los cargos
router.get('/mostrar/cargos', (request, response) => {
  const sql = 'CALL sp_select_informacion("cargos",0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un cargo por su código
router.get('/mostrar/cargos/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_informacion("cargo", ?);'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

module.exports = router
