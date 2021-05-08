import { NextApiRequest, NextApiResponse } from 'next'

type ResponseType = {
  name: string | string[]
}

type ResponseError = {
  message: string
}

export default (req: NextApiRequest, res: NextApiResponse<ResponseType | ResponseError>) => {
  const { name } = req.query
  res.status(200).json({ name })
  res.status(200).json({message:"User not found"})
}
