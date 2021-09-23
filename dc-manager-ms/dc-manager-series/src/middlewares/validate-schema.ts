import { Request, Response } from "express";

import { ExpressMiddlewareInterface } from "routing-controllers";
import { checkSchema, validationResult } from "express-validator";

export class ValidateSchemaMiddleware implements ExpressMiddlewareInterface {
  private readonly schamaValidations = [
    checkSchema({
      serie: {
        errorMessage: "Serie es incorrecto, verifica este campo.",
        isString: true,
        trim: true,
        notEmpty: true,
      },
      periocity: {
        errorMessage: "Período es incorrecto, verifica este campo.",
        isString: true,
        trim: true,
        notEmpty: true,
      },
      startDate: {
        errorMessage: "Fecha de inicio es incorrecto, verifica este campo.",
        isDate: true,
        exists: true,
        notEmpty: true,
      },
      endDate: {
        errorMessage: "Fecha de finalizado es incorrecto, verifica este campo.",
        optional: { options: { nullable: true } },
        isDate: true,
      },
    }),
  ];

  constructor() {}

  async use(
    request: Request,
    response: Response,
    next: (err?: any) => any
  ): Promise<any> {
    for (let validation of this.schamaValidations) {
      const result: any = await validation.run(request);
      if (result.length) break;
    }

    const errors = validationResult(request);
    if (errors.isEmpty()) {
      return next();
    }

    response
      .status(400)
      .json({
        payload: null,
        message: "Esquema o parámetros inválidos.",
        errors: errors.array(),
      });
  }
}
