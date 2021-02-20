import { ShortenedUrl } from "@domain/entity";
import { IShortenedUrlGateway } from "@src/data/gateway";
import { IValidation } from "@src/helper/validations"

// caso de uso para geração de url curta
export class AddShortenedUrl {

    shortenedUrlGateway: IShortenedUrlGateway;
    shortenedUrlValidation: IValidation

    constructor(shortenedUrlGateway: IShortenedUrlGateway, shortenedUrlValidation: IValidation) {
        this.shortenedUrlGateway = shortenedUrlGateway;
        this.shortenedUrlValidation = shortenedUrlValidation;
    }

    async add(shortenedUrl: ShortenedUrl): Promise<ShortenedUrl> {
        const error = this.shortenedUrlValidation.validate(shortenedUrl);
        if(error){
            throw error;
        }
        return this.shortenedUrlGateway.add(shortenedUrl);
    }
}