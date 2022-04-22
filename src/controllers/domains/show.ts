import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import { NotFound } from 'http-errors'

import { Domain } from '../../entities'

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const domainRepository = getRepository(Domain)
  const id = +req.params.id

  try {
    const domain = await domainRepository.findOne({ where: { id } })

    if (!domain) {
      return next(new NotFound('Domain not found'))
    }

    res.status(200).json(domain)
  } catch (err) {
    return next(err)
  }
}
