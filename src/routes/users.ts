import { Router } from 'express'

import {
  destroy,
  edit,
  list,
  show,
  showDomains,
  create
} from '../controllers/users'

const router = Router()

router
  .get('/', list)
  .get('/:id([0-9]+)', show)
  .get('/:id([0-9]+)/domains', showDomains)
  .post('/', create)
  .put('/:id([0-9]+)', edit)
  .delete('/:id([0-9]+)', destroy)

export { router as users }
