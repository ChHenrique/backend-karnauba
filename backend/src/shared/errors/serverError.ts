export class ServerError extends Error {
    constructor(message: string, statusCode: number = 400){
        super(message)
    }
}