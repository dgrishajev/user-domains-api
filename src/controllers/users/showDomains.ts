import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import { NotFound } from 'http-errors'

import { User } from '../../entities'

export const showDomains = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = getRepository(User)
  const id = +req.params.id

  try {
    const user = await userRepository.findOne({
      where: { id },
      relations: ['domains']
    })

    if (!user) {
      return next(new NotFound('User not found'))
    }

    res
      .status(200)
      .json(user.domains?.length ? user.domains : 'User has no domains')
  } catch (err) {
    return next(err)
  }
}
