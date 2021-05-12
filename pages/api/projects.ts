import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../services/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const firestoreResponse = await db.collection('projects').get();
  var data = []
  firestoreResponse.forEach((doc) => {
    var { name, details, image, documentation = undefined, github = undefined } = doc.data()
    var projectObj = {
      name,
      image,
      details,
      buttons: {
        documentation,
        github
      }
    }
    data.push(projectObj)
  });
  res.json(data)
}
