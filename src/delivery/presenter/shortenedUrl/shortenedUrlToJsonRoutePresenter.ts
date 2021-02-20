import { ShortenedUrl } from "@domain/entity/ShortenedUrl";


// modo como é retornado a url curta 
export const shortenedUrlToJsonOldRoutePresenter = (host: String, shortenedUrl: ShortenedUrl): object => {

    const payload = {
        newUrl: `${host}/${shortenedUrl._id}`
    }

    return payload;

}