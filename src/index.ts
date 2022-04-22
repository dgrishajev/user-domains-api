import 'reflect-metadata'
import express from 'express'
import { json, urlencoded } from 'body-parser'
import { NotFound } from 'http-errors'

import { createConnection } from './orm/createConnection'
import { routes } from './routes'
import { errorHandler } from './utils/errorHandler'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/', routes)
app.use((req, res, next) => next(new NotFound()))
app.use(errorHandler)

const port = 8080

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
;(async () => {
  await createConnection()
})()
