import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../services/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const firestoreResponse = await db.collection('messages').get();
  var data = []
  firestoreResponse.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() })
  });
  res.json(data)
}
