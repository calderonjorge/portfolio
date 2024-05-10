import { db } from '@/db'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: Object;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
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
    const result = stmt.get(req.query.id) as Object

    res.status(200).json({ result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ result: 'error' })
  }
}
