import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import { NotFound, BadRequest } from 'http-errors'

import { User } from '../../entities'

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getRepository(User)
  const id = +req.params.id
  const { firstName, lastName, age } = req.body

  if (!firstName || !lastName || !age) {
    return next(new BadRequest('Missing data'))
  }

  try {
    const user = await userRepository.findOne({ where: { id } })

    if (!user) {
      return next(new NotFound('User not found'))
    }

    user.firstName = firstName
    user.lastName = lastName
    user.age = age

    try {
      await userRepository.save(user)
      res.status(200).send(user)
    } catch (err) {
      return next(err)
    }
  } catch (err) {
    return next(err)
  }
}
