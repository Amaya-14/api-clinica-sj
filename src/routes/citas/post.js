const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// crear cita
router.post('/crear/cita', (request, response) => {
  const { paciente, empleado, fechaInicio, fechaFinal, horaInicio, horaFinal, estado, tipo, descripcion } = request.body
  const sql = 'SET @paciente=?; SET @empleado=?; SET @fechaInicio=?; SET @fechaFinal=?; SET @horaInicio=?; SET @horaFinal=?; SET @estado=?; SET @tipo=?; SET @descripcion=?; CALL sp_cit_insert_citas(@paciente, @empleado, @fechaInicio, @fechaFinal, @horaInicio, @horaFinal, @estado, @tipo, @descripcion);'

  mysqlConnection.query(sql, [paciente, empleado, fechaInicio, fechaFinal, horaInicio, horaFinal, estado, tipo, descripcion], (error, rows, fields) => {
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
