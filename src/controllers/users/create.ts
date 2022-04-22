import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import { BadRequest } from 'http-errors'

import { User } from '../../entities'

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, age } = req.body

  if (!firstName || !lastName || !age) {
    return next(new BadRequest('Missing data'))
  }

  const userRepository = getRepository(User)
  try {
    const user = new User()

    user.firstName = firstName
    user.lastName = lastName
    user.age = age

    try {
      await userRepository.insert(user)
      res.status(201).send('Successfully created user')
    } catch (err) {
      return next(err)
    }
  } catch (err) {
    return next(err)
  }
}
