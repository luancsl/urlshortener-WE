import { HttpRequest, HttpResponse } from "./http";

// interface de um controle 
export interface Controller {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}