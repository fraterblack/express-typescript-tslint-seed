import { Request, Response } from 'express'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.json('Hello world alterado!')
  }
}

export default new UserController()
