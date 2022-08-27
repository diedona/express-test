import { App } from './app';

const port = process.env.PORT || 3333;
new App().server.listen(port, () => {
  console.log(`running on port ${port}`);
});