import { Router } from "express";
import { HomeController } from './controllers/home-controller';

const systemRoutes = Router();
const homeController = new HomeController();

systemRoutes.get('/', homeController.Home);
systemRoutes.get('/home', homeController.Home);
systemRoutes.get('/home/welcome', homeController.Welcome);

systemRoutes.get('/products', (req, res) => {
  res.json('ok ok');
});

export { systemRoutes };