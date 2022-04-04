const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// actualizar rol
router.put('/update/rol/:cod', (request, response) => {
  const { cod } = request.params
  const { nombre } = request.body
  const sql = 'SET @str="editar"; SET @cod=?; SET @nombre=?; CALL sp_crud_roles(@str, @cod, @nombre);'

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

// actualizar objeto
router.put('/update/objeto/:cod', (request, response) => {
  const { cod } = request.params
  const { nombre } = request.body
  const sql = 'SET @str="editar"; SET @cod=?; SET @nombre=?; CALL sp_crud_objetos(@str, @cod, @nombre);'

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

// actualizar permiso
router.put('/update/permiso/:rol/:obj', (request, response) => {
  const { rol, obj } = request.params
  const { visualizar, consultar, insertar, actualizar, eliminar } = request.body
  const sql = 'SET @str="editar"; SET @rol=?; SET @obj=?; SET @visualizar=?; SET @consultar=?; SET @insertar=?; SET @actualizar=?; SET @eliminar=?; CALL sp_crud_permisos(@str, @rol, @obj, @visualizar, @consultar, @insertar, @actualizar, @eliminar);'

  mysqlConnection.query(sql, [rol, obj, visualizar, consultar, insertar, actualizar, eliminar], (error, rows, fields) => {
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

// actualizar permiso
router.put('/update/usuario/:codRol/:codRel', (request, response) => {
  const { codRol, codRel } = request.params
  const { name, email, rol } = request.body
  const sql = 'SET @str="editar"; SET @codRol=?; SET @codRel=?; SET @name=?; SET @email=?; SET @rol=?; CALL sp_crud_usuarios(@str, @codRol, @codRel, @name, @email, "---", @rol, 0);'

  mysqlConnection.query(sql, [codRol, codRel, name, email, rol], (error, rows, fields) => {
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
