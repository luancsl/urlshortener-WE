import { IShortenedUrlGateway } from "@src/data/gateway/shortenedUrlGateway";
import { shortenedUrlPostgresModel, IShortenedUrlPostgresModel } from "@src/main/model";
import { ModelCtor, Op } from "sequelize";
import { ShortenedUrl } from "@domain/entity";
import { date } from "faker";


// definição de funções do banco seguindo uma interface de Gateway
export class ShortenedUrlPostgresGateway implements IShortenedUrlGateway {

    private _model: ModelCtor<IShortenedUrlPostgresModel>;

    constructor() {
        this._model = shortenedUrlPostgresModel;
    }

    getById(id: number): Promise<ShortenedUrl> {
        return this._model.findByPk(id).then(doc => {
            const shortenedUrl: ShortenedUrl = doc;
            return shortenedUrl;
        });
    }

    add(shortenedUrl: ShortenedUrl): Promise<ShortenedUrl> {
        return this._model.create(shortenedUrl).then(doc => {
            const shortenedUrl: ShortenedUrl = doc;
            return shortenedUrl;
        });
    }

    removeByTime(time: number): any {
        const dateNow: any = new Date();

        return this._model.destroy({
            where: {
                createdAt: {
                    [Op.lt]: new Date(dateNow - time)
                }
            }
        }).then(doc => {
            return doc;
        });
    }

}