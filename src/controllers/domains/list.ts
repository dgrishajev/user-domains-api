import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'

import { Domain } from '../../entities'

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const domainRepository = getRepository(Domain)
  try {
    const domains = await domainRepository.find({
      select: ['id', 'extension', 'label', 'user']
    })

    res.status(200).json(domains)
  } catch (err) {
    return next(err)
  }
}
