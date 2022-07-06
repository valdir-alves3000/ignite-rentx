import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const file = request.file as Express.Multer.File;

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
