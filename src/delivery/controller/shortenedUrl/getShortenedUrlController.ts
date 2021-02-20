import { Controller, HttpRequest, HttpResponse } from "../index";
import { IShortenedUrlGateway } from "@src/data/gateway";
import { GetShortenedUrl } from "@src/domain/usercase/shortenedUrl";
import { found, notFound } from "@src/helper/http";

// controle da rota de recuperação da url original
export class GetShortenedUrlController implements Controller {

    shortenedUrlGateway: IShortenedUrlGateway;

    constructor(shortenedUrlGateway: IShortenedUrlGateway) {
        this.shortenedUrlGateway = shortenedUrlGateway;
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const getShortenedUrl = new GetShortenedUrl(this.shortenedUrlGateway);
        if (httpRequest.params.id) {
            return getShortenedUrl.getById(httpRequest.params.id).then(shortenedUrl => {
                return found(shortenedUrl.url);
            }).catch(error => {
                return notFound();
            });

        } else {
            return notFound();
        }

    }
}