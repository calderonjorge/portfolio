import Database from 'better-sqlite3'

const fs = require('fs')

// Obtener la ruta del directorio actual
const directorioActual = './src/db'

// Listar los archivos en el directorio actual
fs.readdirSync(directorioActual).forEach(archivo => {
  console.error(archivo)
})

export const db = new Database('./src/db/loans.db')
