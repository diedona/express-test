import { Request, Response } from 'express';

export class HomeController {

  Home(req: Request, res: Response) {
    return res.json('ok home');
  }

  Welcome(req: Request, res: Response) {
    return res.json('be welcome!');
  }

}