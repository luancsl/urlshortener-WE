import { ShortenedUrl } from "@domain/entity";
import { IShortenedUrlGateway } from "@src/data/gateway";


export class RemoveShortenedUrl {

    shortenedUrlGateway: IShortenedUrlGateway;

    constructor(shortenedUrlGateway: IShortenedUrlGateway) {
        this.shortenedUrlGateway = shortenedUrlGateway;
    }

    // remoção de urls curtas com um certo tempo de criação  
    async removeByTime(time: number) {
        return this.shortenedUrlGateway.removeByTime(time);
    }
}