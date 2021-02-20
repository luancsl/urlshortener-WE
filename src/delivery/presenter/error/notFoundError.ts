

// apresentação do erro not found
export class NotFoundError extends Error {
    constructor () {
      super('Not Found!')
      this.name = 'NotFoundError'
    }
  }
  