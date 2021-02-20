import { Request, Response } from "express";
import { Controller, HttpRequest, HttpResponse } from "@src/delivery/controller";


// adaptador para o framework express 
export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      protocol: req.protocol,
      hostname: req.hostname
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else if (httpResponse.statusCode >= 300 && httpResponse.statusCode <= 308) {
      res.redirect(httpResponse.statusCode, httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}