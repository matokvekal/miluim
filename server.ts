import dotenv from 'dotenv';
import initServer from './src/initializers/initServer';
import { config } from './src/config/index';
import { Request, Response, NextFunction } from "express";

initServer(config).then(({ app, server }) => {


  //this is comment1
  //tis is comment 2
  


  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Request received:", req.path);
    next();
  })

  server.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  })

});