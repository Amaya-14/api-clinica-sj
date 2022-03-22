const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// crear paciente
router.post('/crear/paciente', (request, response) => {
  const { dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numArea, numTelefono, tipoTelefono, desTelefono, dirPersona, desDireccion, corrPersona } = request.body

  const sql = 'SET @tipoRegistro="P"; SET @dni=?; SET @nombres=?; SET @apellidos=?; SET @nacionalidad=?; SET @edad=?; SET @fechaNacimiento=?; SET @sexo=?; SET @estadoCivil=?; SET @numArea=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; SET @dirPersona=?; SET @desDireccion=?; SET @corrPersona=?; SET @codCargo=0; SET @fotoEmpleado=0; SET @fechaContratacion="2000-01-01"; CALL sp_insert_persona(@tipoRegistro, @dni, @nombres, @apellidos, @nacionalidad, @edad, @fechaNacimiento, @sexo, @estadoCivil, @numArea, @numTelefono, @tipoTelefono, @desTelefono, @dirPersona, @desDireccion, @corrPersona, @codCargo, @fotoEmpleado, @fechaContratacion);'

  mysqlConnection.query(sql, [dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numArea, numTelefono, tipoTelefono, desTelefono, dirPersona, desDireccion, corrPersona], (error, rows, fields) => {
    if (!error) {
      response.status(201).send({
        status: 201,
        mensaje: 'Registro creado exitaxamente'
      })
    } else console.log(error)
  })
})

// crear empleado
router.post('/crear/empleado', (request, response) => {
  const { dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numArea, numTelefono, tipoTelefono, desTelefono, dirPersona, desDireccion, corrPersona, codCargo, fotoEmpleado, fechaContratacion } = request.body

  const sql = 'SET @tipoRegistro=E; SET @dni=?; SET @nombres=?; SET @apellidos=?; SET @nacionalidad=?; SET @edad=?; SET @fechaNacimiento=?; SET @sexo=?; SET @estadoCivil=?; SET @numArea=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; SET @dirPersona=?; SET @desDireccion=?; SET @corrPersona=?; SET @codCargo=?; SET @fotoEmpleado=?; SET @fechaContratacion=?; CALL sp_insert_persona(@tipoRegistro, @dni, @nombres, @apellidos, @nacionalidad, @edad, @fechaNacimiento, @sexo, @estadoCivil, @numArea, @numTelefono, @tipoTelefono, @desTelefono, @dirPersona, @desDireccion, @corrPersona, @codCargo, @fotoEmpleado, @fechaContratacion);'

  mysqlConnection.query(sql, [dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numArea, numTelefono, tipoTelefono, desTelefono, dirPersona, desDireccion, corrPersona, codCargo, fotoEmpleado, fechaContratacion], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// crear teléfono
router.post('/crear/telefono', (request, response) => {
  const { numArea, numTelefono, tipoTelefono, desTelefono } = request.body
  const sql = 'SET @str=crear; SET @cod=0; SET @numArea=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; CALL sp_crud_telefono(@str, @cod, @numArea, @numTelefono, @tipoTelefono, @desTelefono);'

  mysqlConnection.query(sql, [numArea, numTelefono, tipoTelefono, desTelefono], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// crear dirrección
router.post('/crear/direccion', (request, response) => {
  const { dirPersona, desDireccion } = request.body
  const sql = 'SET @str=crear; SET @cod=0; SET @dirPersona=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; CALL sp_crud_direccion(@str, @cod, @dirPersona, @desDireccion);'

  mysqlConnection.query(sql, [dirPersona, desDireccion], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// crear correo
router.post('/crear/correo', (request, response) => {
  const { corrPersona } = request.body
  const sql = 'SET @str=crear; SET @cod=0; SET @corrPersona=?; CALL sp_crud_correo(@str, @cod, @corrPersona);'

  mysqlConnection.query(sql, [corrPersona], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// crear cargo
router.post('/crear/cargo', (request, response) => {
  const { nombreCargo, desCargo } = request.body

  const sql = 'SET @str=crear; SET @cod=0; SET @nombreCargo=?; SET @desCargo=?; CALL sp_crud_cargo(@str, @cod, @nombreCargo, @desCargo);'

  mysqlConnection.query(sql, [nombreCargo, desCargo], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

module.exports = router
