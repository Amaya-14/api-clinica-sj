const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// crear rol
router.post('/crear/rol', (request, response) => {
  const { nombre } = request.body
  const sql = 'SET @str="crear"; SET @cod=0; SET @nombre=?; CALL sp_crud_roles(@str, @cod, @nombre);'

  mysqlConnection.query(sql, nombre, (error, rows, fields) => {
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

// crear objeto
router.post('/crear/objeto', (request, response) => {
  const { nombre } = request.body
  const sql = 'SET @str="crear"; SET @cod=0; SET @nombre=?; CALL sp_crud_objetos(@str, @cod, @nombre);'

  mysqlConnection.query(sql, nombre, (error, rows, fields) => {
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

// crear registro bitácora
router.post('/crear/bitacora', (request, response) => {
  const { usuario, objeto, accion, descripcion } = request.body
  const sql = 'SET @usuario=?; SET @objeto=?; SET @accion=?; SET @descripcion=?; CALL sp_seg_insert_bitacora(@usuario, @objeto, @accion, @descripcion);'

  mysqlConnection.query(sql, [usuario, objeto, accion, descripcion], (error, rows, fields) => {
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

// crear usuario
router.post('/crear/usuario', (request, response) => {
  const { name, email, password, rol, empleado } = request.body
  const sql = 'SET @name=?; SET @email=?; SET @password=?; SET @rol=?; SET @empleado=?; CALL sp_crud_usuarios("crear", 0, 0, @name, @email, @password, @rol, @empleado);'

  mysqlConnection.query(sql, [name, email, password, rol, empleado], (error, rows, fields) => {
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
