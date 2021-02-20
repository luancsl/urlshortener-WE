import { ShortenedUrl } from "@domain/entity";
import { IShortenedUrlGateway } from "@src/data/gateway";

// caso de uso recuperação de url original
export class GetShortenedUrl {

    shortenedUrlGateway: IShortenedUrlGateway;

    constructor(shortenedUrlGateway: IShortenedUrlGateway) {
        this.shortenedUrlGateway = shortenedUrlGateway;
    }
    
    async getById(id: number): Promise<ShortenedUrl> {
        return this.shortenedUrlGateway.getById(id);
    }
}