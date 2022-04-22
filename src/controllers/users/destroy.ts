import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import { NotFound } from 'http-errors'

import { User } from '../../entities/User'

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = +req.params.id

  const userRepository = getRepository(User)
  try {
    const user = await userRepository.findOne({ where: { id } })

    if (!user) {
      return next(new NotFound('User not found'))
    }
    await userRepository.delete(id)

    res.status(200).send('User successfully deleted')
  } catch (err) {
    return next(err)
  }
}
