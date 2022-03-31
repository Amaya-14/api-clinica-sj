const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// crear medicamento
router.post('/crear/medicamento', (request, response) => {
  const { medicamento, presentacion, tipo, descripcion } = request.body
  const sql = 'SET @medicamento=?; SET @presentacion=?; SET @tipo=?; SET @descripcion=?; CALL sp_alm_insert_medicamento_material("crearMedicamento", 0, @medicamento, @presentacion, @tipo, @descripcion);'

  mysqlConnection.query(sql, [medicamento, presentacion, tipo, descripcion], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 201,
        message: 'Created'
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

// crear material
router.post('/crear/material', (request, response) => {
  const { material, tipo, descripcion } = request.body
  const sql = 'SET @material=?; SET @tipo=?; SET @descripcion=?; CALL sp_alm_insert_medicamento_material("crearMaterial", 0, @material, "---", @tipo, @descripcion);'

  mysqlConnection.query(sql, [material, tipo, descripcion], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 201,
        message: 'Created'
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

// crear tipo medicamento
router.post('/crear/tipo/medicamento', (request, response) => {
  const { nombre, descripcion } = request.body
  const sql = 'SET @nombre=?; SET @descripcion=?; CALL sp_alm_insert_tipos_unidades("createTipoMedicamentos", 0,@nombre, @descripcion);'

  mysqlConnection.query(sql, [nombre, descripcion], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 201,
        message: 'Created'
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

// crear unidad presentacion
router.post('/crear/unidad/presentacion', (request, response) => {
  const { nombre } = request.body
  const sql = 'SET @nombre=?; SET @descripcion="---"; CALL sp_alm_insert_tipos_unidades("createUnipresentacion", 0, @nombre, @descripcion);'

  mysqlConnection.query(sql, [nombre], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 201,
        message: 'Created'
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

// crear tipo material
router.post('/crear/tipo/material', (request, response) => {
  const { nombre, descripcion } = request.body
  const sql = 'SET @nombre=?; SET @descripcion=?; CALL sp_alm_insert_tipos_unidades("createTipoMateriales", 0,@nombre, @descripcion);'

  mysqlConnection.query(sql, [nombre, descripcion], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 201,
        message: 'Created'
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
