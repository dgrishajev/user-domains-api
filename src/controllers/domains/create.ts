import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import { BadRequest, NotFound } from 'http-errors'

import { Domain, User } from '../../entities'

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { label, extension, userId } = req.body

  if (!label || !extension || !userId) {
    return next(new BadRequest('Missing data'))
  }

  const domainRepository = getRepository(Domain)

  const userRepository = getRepository(User)
  const user = await userRepository.findOne({ where: { id: userId } })

  if (!user) {
    return next(new NotFound('User not found'))
  }

  try {
    const domain = new Domain()

    domain.label = label
    domain.extension = extension
    domain.user = user

    try {
      await domainRepository.insert(domain)
      res.status(201).send('Successfully created domain')
    } catch (err) {
      return next(err)
    }
  } catch (err) {
    return next(err)
  }
}
