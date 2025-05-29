export class ServerError extends Error {
    public statusCode: number;
    public details?: unknown;

    constructor(message: string, statusCode: number = 400, details?: unknown) {
        super(message);
        this.name = 'ServerError';
        this.statusCode = statusCode;
        this.details = details;
    }
}
