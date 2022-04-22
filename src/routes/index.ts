import { Router } from 'express'

import { users } from './users'
import { domains } from './domains'

const router = Router()

router.use('/users', users)
router.use('/domains', domains)

export { router as routes }
