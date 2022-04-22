import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'

import { User } from '../../entities'

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getRepository(User)
  try {
    const users = await userRepository.find({
      select: ['id', 'firstName', 'lastName', 'age', 'domains'],
      relations: ['domains']
    })

    res.status(200).json(users)
  } catch (err) {
    return next(err)
  }
}
