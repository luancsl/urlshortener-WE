import { HttpRequest, HttpResponse } from '@src/delivery/controller/http';
import { AddShortenedUrlController } from "./addShortenedUrlController";
import { SutShortenedUrlGateway } from "./gatewayFakeTest";
import faker from "faker"

const sut = new AddShortenedUrlController(new SutShortenedUrlGateway());

describe('Add ShortenedUrl Controller', () => {
    test('Deve retornar o código 400 para os parâmetros obrigatórios ausentes ', async () => {
        const httpRequest: HttpRequest = {
            body: {
                _id: "test",
                none: faker.random.word
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest);
        console.log("cODf :", httpResponse.statusCode)
        expect(httpResponse.statusCode).toEqual(400);
    })

    test('Não deve retornar o código 400 para os parâmetros necessários presentes', async () => {
        const httpRequest: HttpRequest = {
            body: {
                _id: "test", 
                url: faker.random.word
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toEqual(200);
    })
});