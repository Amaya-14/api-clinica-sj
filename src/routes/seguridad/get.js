const express = require('express')
const router = express.Router()
const mysqlConnection = require('../../conexionDB')

// obtener todos los objetos
router.get('/mostrar/objetos', (request, response) => {
  const sql = 'CALL sp_select_seguridad("objetos", 0, 0);'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un objeto por su código
router.get('/mostrar/objetos/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_seguridad("objeto", ?, 0);'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los roles
router.get('/mostrar/roles', (request, response) => {
  const sql = 'CALL sp_select_seguridad("roles", 0, 0);'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un rol por su código
router.get('/mostrar/roles/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_seguridad("rol", ?, 0);'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los permisos
router.get('/mostrar/permisos', (request, response) => {
  const sql = 'CALL sp_select_seguridad("permisos", 0, 0);'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener un permiso por el código del rol y objeto
router.get('/mostrar/permisos/:rol/:obj', (request, response) => {
  const { rol, obj } = request.params
  const sql = 'CALL sp_select_seguridad("permiso", ?, ?);'
  mysqlConnection.query(sql, [rol, obj], (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los registros de bitácora
router.get('/mostrar/bitacora', (request, response) => {
  const sql = 'CALL sp_select_seguridad("bitacora", 0, 0);'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los registros de bitácora
router.get('/mostrar/usuarios', (request, response) => {
  const sql = 'CALL sp_select_seguridad("usuarios", 0, 0);'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

// obtener todos los registros de bitácora
router.get('/mostrar/usuarios/:cod', (request, response) => {
  const { cod } = request.params
  const sql = 'CALL sp_select_seguridad("usuario", ?, 0);'
  mysqlConnection.query(sql, cod, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

//
router.get('/mostrar/usuario/rol', (request, response) => {
  const sql = 'CALL sp_select_seguridad("usuarioRol", 0, 0);'
  mysqlConnection.query(sql, (error, rows, fields) => {
    if (!error) response.send(rows)
    else console.log(error)
  })
})

module.exports = router
