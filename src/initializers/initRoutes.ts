import { Router } from "express";
import { TempController } from "../controllers/temp";



export default (router: Router, app: any) => {
   ``
   const modelBase = "temp";
   const tempController = new TempController(app, modelBase);

   // GET /api/temp
   router.get(
      `/`,
      tempController.hello.bind(tempController)
   );
   // GET /api/temp/hello
   router.get(
      `/hello`,
      tempController.hello2.bind(tempController)
   );


};