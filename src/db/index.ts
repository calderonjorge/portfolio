import Database from 'better-sqlite3'

export const db = new Database('./loans.db')

// que solo los meses se haga el cargo automatico de payments
// Seria registrar
// cantidad: 2000, term: mensual, pagos: 3,
// cantidad: 4000, term: quincenal, pago: 1

// db.prepare(`
//   CREATE TABLE IF NOT EXISTS Clients (
//     id TEXT PRIMARY KEY,
//     name TEXT,
//     phone TEXT
//   )
// `).run()

// // Crear la tabla de Préstamos
// db.prepare(`
//   CREATE TABLE IF NOT EXISTS Loans (
//     id TEXT PRIMARY KEY,
//     clientId TEXT,
//     loanAmount REAL,
//     monthlyPayments BOOLEAN,
//     referral TEXT,
//     FOREIGN KEY(clientId) REFERENCES Clients(id)
//   )
// `).run()

// // Crear la tabla de Pagos
// db.prepare(`
//   CREATE TABLE IF NOT EXISTS Payments (
//     id TEXT PRIMARY KEY,
//     loanId TEXT,
//     paymentDate TEXT,
//     actualPaymentDate TEXT,
//     amountPaid REAL,
//     status TEXT,
//     FOREIGN KEY(loanId) REFERENCES Loans(id)
//   )
// `).run()

// db.close()
