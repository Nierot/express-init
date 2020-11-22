import { response } from '../helpers/response'

export default function hello(req, res) {
  return response(res, 200, { message: 'Hello World' })
}
