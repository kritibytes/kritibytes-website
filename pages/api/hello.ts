import { NextApiRequest, NextApiResponse } from 'next'

export interface ResponseType {
  name: string | string[]
}

export interface ResponseError {
  message: string
}

export default (req: NextApiRequest, res: NextApiResponse<ResponseType | ResponseError>) => {
  const { name } = req.query
  res.status(200).json({ name })
  res.status(200).json({ message: "User not found" })
}
