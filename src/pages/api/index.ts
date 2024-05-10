import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db'

type Data = {
  result: any;
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  // Ejecutar la consulta SQL
  const loanId = '4d5e6f7g-8h9i-0j1a-2b3c' // ID del préstamo que quieres consultar
  const query = `
    SELECT
      L.id AS loanId,
      L.clientId,
      C.name AS clientName,
      L.loanAmount,
      L.monthlyPayments,
      L.referral,
      P.paymentDate,
      P.amountPaid,
      P.status
    FROM
        Loans AS L
    JOIN
        Clients AS C ON L.clientId = C.id
    LEFT JOIN
        Payments AS P ON L.id = P.loanId
    WHERE
        L.id = ?;
`

  const stmt = db.prepare(query)
  const result = stmt.get(loanId)

  // Imprimir el resultado de la consulta

  res.status(200).json({ result })
}
