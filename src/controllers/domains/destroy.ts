import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import { NotFound } from 'http-errors'

import { Domain } from '../../entities'

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = +req.params.id

  const domainRepository = getRepository(Domain)
  try {
    const domain = await domainRepository.findOne({ where: { id } })

    if (!domain) {
      return next(new NotFound('Domain not found'))
    }
    await domainRepository.delete(id)

    res.status(200).send('Domain successfully deleted')
  } catch (err) {
    return next(err)
  }
}
