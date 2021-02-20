import { ShortenedUrl } from "@src/domain/entity/ShortenedUrl"


// interface de gateways 
export interface IShortenedUrlGateway {
    getById(id: number): Promise<ShortenedUrl>;
    add(shortenedUrl: ShortenedUrl): Promise<ShortenedUrl>;
    removeByTime(time: number): any;
}