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

// eliminar tipo medicamento
router.delete('/delete/tipo/medicamento/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_alm_insert_tipos_unidades("deleteTipoMedicamento", @cod, "---", "---");'

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

// eliminar tipo material
router.delete('/delete/tipo/material/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_alm_insert_tipos_unidades("deleteTipoMaterial", @cod, "---", "---");'

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

// eliminar unidad presentacion
router.delete('/delete/unidad/presentacion/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_alm_insert_tipos_unidades("deleteUnidades", @cod, "---", "---");'

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
