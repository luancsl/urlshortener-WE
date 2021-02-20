import { HttpRequest, HttpResponse } from '@src/delivery/controller/http';
import { GetShortenedUrlController } from "./getShortenedUrlController";
import { SutShortenedUrlGateway } from "./gatewayFakeTest";

const sut = new GetShortenedUrlController(new SutShortenedUrlGateway());

describe('Get ShortenedUrl Controller', () => {
    test('Deve retornar o código 302 para redirecionamento', async () => {
        const httpRequest: HttpRequest = {
            params: {
                id: 'oj2cpaMoPa'
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toEqual(302);
    })

    test('Deve retornar o código 404 para código curto não encontrado', async () => {
        const httpRequest: HttpRequest = {
            params: {
                id: '1j2cpaM333'
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toEqual(404);
    })

    test('Deve retornar o código 404 para código curto vazio', async () => {
        const httpRequest: HttpRequest = {
            params: {
                id: ''
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toEqual(404);
    })

});