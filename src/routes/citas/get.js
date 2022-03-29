const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// obtener todas las citas
router.get('/mostrar/citas', (request, response) => {
  const sql = 'CALL sp_cit_select_cita("citas", 0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener una cita por su código
router.get('/mostrar/citas/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_cit_select_cita("cita",?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los tipos de citas
router.get('/mostrar/estados', (request, response) => {
  const sql = 'CALL sp_cit_select_cita("estados", 0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

//
router.get('/mostrar/estados/:cod', (request, response) => {
  const cod = request.params
  const sql = 'CALL sp_cit_select_cita("estado", ?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los estados de citas
router.get('/mostrar/tipos', (request, response) => {
  const sql = 'CALL sp_cit_select_cita("tipos", 0)'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

router.get('/mostrar/tipos/:cod', (request, response) => {
  const cod = request.params
  const sql = 'CALL sp_cit_select_cita("tipo", ?)'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

module.exports = router
