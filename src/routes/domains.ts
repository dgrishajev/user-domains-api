import { Router } from 'express'

import { destroy, edit, list, show, create } from '../controllers/domains'

const router = Router()

router
  .get('/', list)
  .get('/:id([0-9]+)', show)
  .post('/', create)
  .put('/:id([0-9]+)', edit)
  .delete('/:id([0-9]+)', destroy)

export { router as domains }
