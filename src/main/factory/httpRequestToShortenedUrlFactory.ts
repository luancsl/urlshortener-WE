import { ShortenedUrl } from "@domain/entity";
import { HttpRequest } from "@src/delivery/controller/http"
import { shortCodeGen } from "@src/main/util";


// converte dados da requisição Http em objeto ShortnedUrl
export class HttpRequestToShortenedUrlFactory {
    private _httpRequest: HttpRequest;

    constructor(httpRequest: HttpRequest) {
        this._httpRequest = httpRequest;
    }


    // utiliza o gerador de código curto para gerar o id do objeto
    make(): ShortenedUrl {
        const body = this._httpRequest.body;
        const ShortenedUrl: ShortenedUrl = {
            _id: shortCodeGen(10),
            url: body.url
        }
        return ShortenedUrl;
    }
}