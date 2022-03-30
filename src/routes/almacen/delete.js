const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// eliminar medicamento
router.delete('/delete/medicamento/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_alm_delete_almacen("medicamento", @cod);'

  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 200,
        message: 'OK'
      })
    } else {
      console.log(error)
      response.json({
        message: 'Not Acceptable',
        statusCode: 409,
        error: error.message
      })
    }
  })
})

// eliminar material
router.delete('/delete/material/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_alm_delete_almacen("material", @cod);'

  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 200,
        message: 'OK'
      })
    } else {
      console.log(error)
      response.json({
        message: 'Not Acceptable',
        statusCode: 409,
        error: error.message
      })
    }
  })
})

module.exports = router
