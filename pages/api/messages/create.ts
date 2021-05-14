import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../services/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {

  var data = req.body

  await db.collection("messages").add(data)

  res.json({ success: true })
}