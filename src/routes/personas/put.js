const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// actualizar paciente
router.put('/update/paciente/:cod', (request, response) => {
  const { cod } = request.params
  const { dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numArea, numTelefono, tipoTelefono, desTelefono, dirPersona, desDireccion, corrPersona } = request.body

  const sql = 'SET @cod=?; SET @tipoRegistro=P; SET @dni=?; SET @nombres=?; SET @apellidos=?; SET @nacionalidad=?; SET @edad=?; SET @fechaNacimiento=?; SET @sexo=?; SET @estadoCivil=?; SET @numArea=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; SET @dirPersona=?; SET @desDireccion=?; SET @corrPersona=?; SET @codCargo=0; SET @fotoEmpleado=0; SET @fechaContratacion="2000-01-01"; CALL sp_insert_persona(@cod, @tipoRegistro, @dni, @nombres, @apellidos, @nacionalidad, @edad, @fechaNacimiento, @sexo, @estadoCivil, @numArea, @numTelefono, @tipoTelefono, @desTelefono, @dirPersona, @desDireccion, @corrPersona, @codCargo, @fotoEmpleado, @fechaContratacion);'

  mysqlConnection.query(sql, [cod, dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numArea, numTelefono, tipoTelefono, desTelefono, dirPersona, desDireccion, corrPersona], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// actualizar empleado
router.put('/update/empleado/:cod', (request, response) => {
  const { cod } = request.params
  const { dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numArea, numTelefono, tipoTelefono, desTelefono, dirPersona, desDireccion, corrPersona, codCargo, fotoEmpleado, fechaContratacion } = request.body

  const sql = 'SET @cod=?; SET @tipoRegistro=E; SET @dni=?; SET @nombres=?; SET @apellidos=?; SET @nacionalidad=?; SET @edad=?; SET @fechaNacimiento=?; SET @sexo=?; SET @estadoCivil=?; SET @numArea=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; SET @dirPersona=?; SET @desDireccion=?; SET @corrPersona=?; SET @codCargo=?; SET @fotoEmpleado=?; SET @fechaContratacion=?; CALL sp_insert_persona(@cod, @tipoRegistro, @dni, @nombres, @apellidos, @nacionalidad, @edad, @fechaNacimiento, @sexo, @estadoCivil, @numArea, @numTelefono, @tipoTelefono, @desTelefono, @dirPersona, @desDireccion, @corrPersona, @codCargo, @fotoEmpleado, @fechaContratacion);'

  mysqlConnection.query(sql, [cod, dni, nombres, apellidos, nacionalidad, edad, fechaNacimiento, sexo, estadoCivil, numArea, numTelefono, tipoTelefono, desTelefono, dirPersona, desDireccion, corrPersona, codCargo, fotoEmpleado, fechaContratacion], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// actualizar teléfono
router.put('/update/telefono/:cod', (request, response) => {
  const { cod } = request.params
  const { numArea, numTelefono, tipoTelefono, desTelefono } = request.body
  const sql = 'SET @cod=?; SET @str=editar; SET @numArea=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; CALL sp_crud_telefono(@str, @cod, @numArea, @numTelefono, @tipoTelefono, @desTelefono);'

  mysqlConnection.query(sql, [cod, numArea, numTelefono, tipoTelefono, desTelefono], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// actualizar dirrección
router.put('/update/direccion/:cod', (request, response) => {
  const { cod } = request.params
  const { dirPersona, desDireccion } = request.body
  const sql = 'SET @cod=?; SET @str=editar; SET @dirPersona=?; SET @numTelefono=?; SET @tipoTelefono=?; SET @desTelefono=?; CALL sp_crud_direccion(@str, @cod, @dirPersona, @desDireccion);'

  mysqlConnection.query(sql, [cod, dirPersona, desDireccion], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// actualizar correo
router.put('/update/correo/:cod', (request, response) => {
  const { cod } = request.params
  const { corrPersona } = request.body
  const sql = 'SET @cod=?; SET @str=editar; SET @corrPersona=?; CALL sp_crud_correo(@str, @cod, @corrPersona);'

  mysqlConnection.query(sql, [cod, corrPersona], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

// actualizar cargo
router.put('/update/cargo/:cod', (request, response) => {
  const { cod } = request.params
  const { nombreCargo, desCargo } = request.body

  const sql = 'SET @cod=?; SET @str=editar; SET @nombreCargo=?; SET @desCargo=?; CALL sp_crud_cargo(@str, @cod, @nombreCargo, @desCargo);'

  mysqlConnection.query(sql, [cod, nombreCargo, desCargo], (error, rows, fields) => {
    if (!error) response.json(rows)
    else console.log(error)
  })
})

module.exports = router
