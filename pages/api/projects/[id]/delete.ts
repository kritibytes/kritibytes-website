import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../services/db'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  const projectId = req.query.id

  if (!session) {
    res.status(403).json({ error: "You have no permission" })
    return
  }

  
  res.json({ id: projectId })
}