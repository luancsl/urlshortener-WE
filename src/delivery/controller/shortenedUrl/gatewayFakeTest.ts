import { IShortenedUrlGateway } from "@src/data/gateway/shortenedUrlGateway"
import { ShortenedUrl } from "@src/domain/entity/ShortenedUrl"

export class SutShortenedUrlGateway implements IShortenedUrlGateway {

    getById(id: number): Promise<ShortenedUrl> {
        return new Promise(function (resolve, reject) {
            if (`${id}` == "oj2cpaMoPa") {
                resolve({
                    _id: "oj2cpaMoPa",
                    url: "test",
                })
            } else {
                reject("Error")
            }

        })
    }

    add(shortenedUrl: ShortenedUrl): Promise<ShortenedUrl> {
        return new Promise(function (resolve, reject) {
            resolve({
                _id: "oj2cpaMoPa",
                url: "test",
            })
        })
    }

    removeByTime(time: number): Promise<ShortenedUrl> {
        return new Promise(function (resolve, reject) {
            resolve({
                _id: "oj2cpaMoPa",
                url: "test",
            })
        })
    }

}