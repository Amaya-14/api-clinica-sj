const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// crear paciente
router.post('/crear/paciente', (request, response) => {
  const { dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numAreaF, numTelefonoF, desTelefonoF, numAreaC, numTelefonoC, desTelefonoC, dirPersona, desDireccion, corrPersona } = request.body

  const sql = 'SET @tipoRegistro="P"; SET @dni=?; SET @nombres=?; SET @apellidos=?; SET @nacionalidad=?; SET @edad=?; SET @fechaNacimiento=?; SET @sexo=?; SET @estadoCivil=?; SET @numAreaF=?; SET @numTelefonoF=?; SET @desTelefonoF=?; SET @numAreaC=?; SET @numTelefonoC=?; SET @desTelefonoC=?; SET @dirPersona=?; SET @desDireccion=?; SET @corrPersona=?; SET @codCargo=0; SET @fotoEmpleado=0; SET @fechaContratacion="2000-01-01"; CALL sp_insert_persona(@tipoRegistro, @dni, @nombres, @apellidos, @nacionalidad, @edad, @fechaNacimiento, @sexo, @estadoCivil, @numAreaF, @numTelefonoF, @desTelefonoF, @numAreaC, @numTelefonoC, @desTelefonoC, @dirPersona, @desDireccion, @corrPersona, @codCargo, @fotoEmpleado, @fechaContratacion);'

  mysqlConnection.query(sql, [dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numAreaF, numTelefonoF, desTelefonoF, numAreaC, numTelefonoC, desTelefonoC, dirPersona, desDireccion, corrPersona], (error, rows, fields) => {
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

// crear empleado
router.post('/crear/empleado', (request, response) => {
  const { dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numAreaF, numTelefonoF, desTelefonoF, numAreaC, numTelefonoC, desTelefonoC, dirPersona, desDireccion, corrPersona, codCargo, fotoEmpleado, fechaContratacion } = request.body

  const sql = 'SET @tipoRegistro="E"; SET @dni=?; SET @nombres=?; SET @apellidos=?; SET @nacionalidad=?; SET @edad=?; SET @fechaNacimiento=?; SET @sexo=?; SET @estadoCivil=?; SET @numAreaF=?; SET @numTelefonoF=?; SET @desTelefonoF=?; SET @numAreaC=?; SET @numTelefonoC=?; SET @desTelefonoC=?; SET @dirPersona=?; SET @desDireccion=?; SET @corrPersona=?; SET @codCargo=?; SET @fotoEmpleado=?; SET @fechaContratacion=?; CALL sp_insert_persona(@tipoRegistro, @dni, @nombres, @apellidos, @nacionalidad, @edad, @fechaNacimiento, @sexo, @estadoCivil, @numAreaF, @numTelefonoF, @desTelefonoF, @numAreaC, @numTelefonoC, @desTelefonoC, @dirPersona, @desDireccion, @corrPersona, @codCargo, @fotoEmpleado, @fechaContratacion);'

  mysqlConnection.query(sql, [dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numAreaF, numTelefonoF, desTelefonoF, numAreaC, numTelefonoC, desTelefonoC, dirPersona, desDireccion, corrPersona, codCargo, fotoEmpleado, fechaContratacion], (error, rows, fields) => {
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

// crear teléfono
router.post('/crear/telefono', (request, response) => {
  const { cod, numArea, numTelefono, tipoTelefono, desTelefono } = request.body
  const sql = 'SET @str="crear"; SET @cod=?; SET @numArea=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; CALL sp_crud_telefono(@str, @cod, @numArea, @numTelefono, @tipoTelefono, @desTelefono);'

  mysqlConnection.query(sql, [cod, numArea, numTelefono, tipoTelefono, desTelefono], (error, rows, fields) => {
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

// crear dirrección
router.post('/crear/direccion', (request, response) => {
  const { cod, dirPersona, desDireccion } = request.body
  const sql = 'SET @str="crear"; SET @cod=?; SET @dirPersona=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; CALL sp_crud_direccion(@str, @cod, @dirPersona, @desDireccion);'

  mysqlConnection.query(sql, [cod, dirPersona, desDireccion], (error, rows, fields) => {
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

// crear correo
router.post('/crear/correo', (request, response) => {
  const { cod, corrPersona } = request.body
  const sql = 'SET @str="crear"; SET @cod=?; SET @corrPersona=?; CALL sp_crud_correo(@str, @cod, @corrPersona);'

  mysqlConnection.query(sql, [cod, corrPersona], (error, rows, fields) => {
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

// crear cargo
router.post('/crear/cargo', (request, response) => {
  const { nombreCargo, desCargo } = request.body
  const sql = 'SET @str="crear"; SET @cod=0; SET @nombreCargo=?; SET @desCargo=?; CALL sp_crud_cargo(@str, @cod, @nombreCargo, @desCargo);'

  mysqlConnection.query(sql, [nombreCargo, desCargo], (error, rows, fields) => {
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
