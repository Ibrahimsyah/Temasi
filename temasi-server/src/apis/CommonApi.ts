import {Router, Request, Response} from 'express';

class CommonApi {
  _router: Router

  constructor() {
    this._router = Router();
    this._router.get('/', this.defaultCommonHandler);
    this._router.get('/ping', this.healthCheckHandler);
  }

  defaultCommonHandler = async (req: Request, res: Response) => {
    res.send('Welcome to TEMASI App Server');
  }

  healthCheckHandler = async (req: Request, res: Response) => {
    res.send('Pong');
  }
}

export default CommonApi;
