const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// actualizar medicamento
router.put('/actualizar/medicamento/:cod', (request, response) => {
  const { cod } = request.params
  const { medicamento, presentacion, tipo, descripcion } = request.body
  const sql = 'SET @cod=?; SET @medicamento=?; SET @presentacion=?; SET @tipo=?; SET @descripcion=?; CALL sp_alm_insert_medicamento_material("actualizarMedicamento", @cod, @medicamento, @presentacion, @tipo, @descripcion);'

  mysqlConnection.query(sql, [cod, medicamento, presentacion, tipo, descripcion], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 200,
        message: 'OK'
      })
    } else {
      console.log(error)
      response.json({
        message: 'Not Modified',
        statusCode: 304,
        error: error.message
      })
    }
  })
})

// actualizar material
router.put('/actualizar/material/:cod', (request, response) => {
  const { cod } = request.params
  const { medicamento, tipo, descripcion } = request.body
  const sql = 'SET @cod=?; SET @medicamento=?; SET @presentacion="---"; SET @tipo=?; SET @descripcion=?; CALL sp_alm_insert_medicamento_material("actualizarMaterial", @cod, @medicamento, @presentacion, @tipo, @descripcion);'

  mysqlConnection.query(sql, [cod, medicamento, tipo, descripcion], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 200,
        message: 'OK'
      })
    } else {
      console.log(error)
      response.json({
        message: 'Not Modified',
        statusCode: 304,
        error: error.message
      })
    }
  })
})

// actualizar tipo de medicamento
router.put('/actualizar/tipo/medicamento/:cod', (request, response) => {
  const { cod } = request.params
  const { nombre, descripcion } = request.body
  const sql = 'SET @cod=?; SET @nombre=?; SET @descripcion=?; CALL sp_alm_insert_tipos_unidades("updateTipomedicamentos", @cod, @nombre,  @descripcion);'

  mysqlConnection.query(sql, [cod, nombre, descripcion], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 200,
        message: 'OK'
      })
    } else {
      console.log(error)
      response.json({
        message: 'Not Modified',
        statusCode: 304,
        error: error.message
      })
    }
  })
})

// actualizar unidad presentacion
router.put('/actualizar/unidad/presentacion/:cod', (request, response) => {
  const { cod } = request.params
  const { nombre } = request.body
  const sql = 'SET @cod=?; SET @nombre=?; SET @descripcion="---"; CALL sp_alm_insert_tipos_unidades("updateUnidades", @cod, @nombre,  @descripcion);'

  mysqlConnection.query(sql, [cod, nombre], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 200,
        message: 'OK'
      })
    } else {
      console.log(error)
      response.json({
        message: 'Not Modified',
        statusCode: 304,
        error: error.message
      })
    }
  })
})

// actualizar tipo de material
router.put('/actualizar/tipo/material/:cod', (request, response) => {
  const { cod } = request.params
  const { nombre, descripcion } = request.body
  const sql = 'SET @cod=?; SET @nombre=?; SET @descripcion=?; CALL sp_alm_insert_tipos_unidades("updateTipomateriales", @cod, @nombre,  @descripcion);'

  mysqlConnection.query(sql, [cod, nombre, descripcion], (error, rows, fields) => {
    if (!error) {
      response.json({
        statusCode: 200,
        message: 'OK'
      })
    } else {
      console.log(error)
      response.json({
        message: 'Not Modified',
        statusCode: 304,
        error: error.message
      })
    }
  })
})

module.exports = router
