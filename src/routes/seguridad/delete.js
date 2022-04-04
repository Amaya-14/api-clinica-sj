const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// eliminar rol
router.delete('/delete/rol/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @str="eliminar"; SET @cod=?; SET @nombre="---"; CALL sp_crud_roles(@str, @cod, @nombre);'

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

// eliminar objeto
router.delete('/delete/objeto/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_delete_seguridad("objeto", @cod, 0);'

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

// eliminar rol
router.delete('/delete/rol/:cod', (request, response) => {
  const { cod } = request.params
  const { cod2 } = request.body
  const sql = 'SET @cod=?; SET @cod2=?; CALL sp_delete_seguridad("permisos", @cod, @cod2);'

  mysqlConnection.query(sql, [cod, cod2], (error, rows, fields) => {
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

// eliminar rol
router.delete('/delete/usuario/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_crud_usuarios("eliminar", @cod, 0 , "---", "---", "---", 0, 0);'

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
