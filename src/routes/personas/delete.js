const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// eliminar paciente
router.delete('/delete/paciente/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_delete_persona("persona", @cod);'

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

// eliminar empleado
router.delete('/delete/empleado/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_delete_persona("persona", @cod);'

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

// eliminar teléfono
router.delete('/delete/telefono/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; SET @str="eliminar"; SET @numArea="0"; SET @numTelefono="0"; SET @tipoTelefono="P"; SET @desTelefono="---"; CALL sp_crud_telefono(@str, @cod, @numArea, @numTelefono, @tipoTelefono, @desTelefono);'

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

// eliminar dirrección
router.delete('/delete/direccion/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; SET @str=eliminar; SET @dirPersona=""; SET @desDireccion=?; CALL sp_crud_direccion(@str, @cod, @dirPersona, @desDireccion);'

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

// eliminar correo
router.delete('/delete/correo/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; SET @str=eliminar; SET @corrPersona=""; CALL sp_crud_correo(@str, @cod, @corrPersona);'

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

// eliminar cargo
router.delete('/delete/cargo/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; SET @str="eliminar"; SET @nombreCargo=""; SET @desCargo=""; CALL sp_crud_cargo(@str, @cod, @nombreCargo, @desCargo);'

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
