import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../services/db'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (!session) {
    res.status(403).json({ error: "You have no permission" })
    return
  }

  const doc = await db.collection('projects').add(req.body)
  res.json({ id: doc.id })
}