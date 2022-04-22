import { HttpError } from 'http-errors'

const toJSON = ({ message, stack }) => ({ message, stack })

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  const { stack } = err

  if (err instanceof HttpError) {
    return res.status(err.statusCode).send(toJSON(err))
  }

  return res
    .status(500)
    .send(toJSON({ message: 'Internal server error', stack }))
}
