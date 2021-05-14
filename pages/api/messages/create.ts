import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../services/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {

  await db.collection("messages").add(req.body)

  res.json({ success: true })
}