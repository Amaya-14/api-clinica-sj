const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// eliminar cita
router.delete('/delete/cita/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_cit_delete_cita(@cod);'

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

// eliminar cita
router.delete('/delete/tipo/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_cit_delete_cita(@cod);'

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

// eliminar cita
router.delete('/delete/estado/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'SET @cod=?; CALL sp_cit_delete_cita(@cod);'

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
