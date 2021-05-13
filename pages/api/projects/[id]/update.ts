import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../services/db'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  const projectId = req.query.id as string

  if (!session) {
    res.status(403).json({ error: "You have no permission" })
    return
  }

  var prj = await db.collection("projects").doc(projectId).set(req.body)

  res.json({ success: true })
}