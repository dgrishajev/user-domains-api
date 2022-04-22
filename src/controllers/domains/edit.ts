import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import { NotFound, BadRequest } from 'http-errors'

import { Domain, User } from '../../entities'

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  const domainRepository = getRepository(Domain)
  const id = +req.params.id
  const { label, extension, userId } = req.body

  if (!label || !extension || !userId) {
    return next(new BadRequest('Missing data'))
  }

  const userRepository = getRepository(User)
  const user = await userRepository.findOne({ where: { id: userId } })

  if (!user) {
    return next(new NotFound('User not found'))
  }

  try {
    const domain = await domainRepository.findOne({ where: { id } })

    if (!domain) {
      return next(new NotFound('Domain not found'))
    }

    domain.label = label
    domain.extension = extension
    domain.user = user

    try {
      await domainRepository.save(domain)
      res.status(200).send(domain)
    } catch (err) {
      return next(err)
    }
  } catch (err) {
    return next(err)
  }
}
