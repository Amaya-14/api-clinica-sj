const mysql = require('mysql')

// Datos de la conexión
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: '',
  multipleStatements: true
})

// Conecatando a la Base de datos
mysqlConnection.connect((error) => {
  if (!error) {
    console.log('Conexión BD Exitosa')
  } else {
    console.log(`Conexión DB fallo \n Error: ${JSON.stringify(error, undefined, 2)}`)
  }
})

module.exports = mysqlConnection
