
// definição de tipos/interface para objetos
export type HttpRequest = {
    body?: any
    headers?: any
    params?: any
    query?: any
    protocol?: any
    hostname?: any
    accountId?: string
}

export type HttpResponse = {
    statusCode: number
    body: any
}