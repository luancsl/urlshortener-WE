import { Controller, HttpRequest, HttpResponse } from "../index";
import { IShortenedUrlGateway } from "@src/data/gateway";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";
import { AddShortenedUrl } from "@src/domain/usercase/shortenedUrl";
import { ShortenedUrl } from "@domain/entity"
import { HttpRequestToShortenedUrlFactory } from "@src/main/factory"
import { badRequest, okay } from "@src/helper/http";
import { shortenedUrlToJsonOldRoutePresenter } from "@src/delivery/presenter/shortenedUrl";
import config from "@src/main/config";



// controle das rotas de geração da url curta
export class AddShortenedUrlController implements Controller {

    shortenedUrlGateway: IShortenedUrlGateway;

    constructor(shortenedUrlGateway: IShortenedUrlGateway) {
        this.shortenedUrlGateway = shortenedUrlGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const shortenedUrl: ShortenedUrl = new HttpRequestToShortenedUrlFactory(httpRequest).make();

        const validations: IValidation[] = [
            new RequiredFieldValidation('url'),
        ];

        const addShortenedUrl = new AddShortenedUrl(this.shortenedUrlGateway, new ValidationComposite(validations));

        return addShortenedUrl.add(shortenedUrl).then(result => {
            const protoc = httpRequest.protocol;
            const host = httpRequest.hostname;
            const port = config.SERVER_PORT;
            const uri = process.env.MODE == "Local" ? `${protoc}://${host}:${port}` : `${protoc}://${host}`
            return okay(shortenedUrlToJsonOldRoutePresenter(uri, result));
        }).catch(error => {
            return badRequest(error);
        });


    }
}