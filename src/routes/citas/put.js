const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// crear cita
router.put('/update/cita/:cod', (request, response) => {
  const { cod } = request.params
  const { paciente, empleado, fechaInicio, fechaFinal, horaInicio, horaFinal, estado, tipo, descripcion } = request.body
  const sql = 'SET @cod=?; SET @paciente=?; SET @empleado=?; SET @fechaInicio=?; SET @fechaFinal=?; SET @horaInicio=?; SET @horaFinal=?; SET @estado=?; SET @tipo=?; SET @descripcion=?; CALL sp_cit_update_citas(@cod, @paciente, @empleado, @fechaInicio, @fechaFinal, @horaInicio, @horaFinal, @estado, @tipo, @descripcion);'

  mysqlConnection.query(sql, [cod, paciente, empleado, fechaInicio, fechaFinal, horaInicio, horaFinal, estado, tipo, descripcion], (error, rows, fields) => {
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
