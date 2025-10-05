import BaseController from "./baseController";


class TempController extends BaseController {
  constructor(app: any, modelName: string) {
    super(app, "sql");
  }

  // GET /api/temp/hello
  hello = async (req: any, res: any) => {
    res.status(200).json({ message: "Hello  from  temp/hello" });
  };

  // GET /api/temp/hello2
  hello2 = async (req: any, res: any) => {
    try {
      res.status(200).json({ message: "Hello  from  temp/hello2" });
    } catch (err) {
      res.status(500).send(" Internal server error");
    }
  };


}

export default TempController;
