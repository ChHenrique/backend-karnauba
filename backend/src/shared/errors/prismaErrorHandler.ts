import { ServerError } from "./serverError";

export function handlePrismaError(error: any): never {
    if (error.code === 'P2002') {
        const target = error.meta?.target as string[] | undefined;

        if (target?.includes('adminId')) {
            throw new ServerError('DUPLICATE_ADMIN_ID', 409);
        }

        if (target?.includes('slug')) {
            throw new ServerError('DUPLICATE_SLUG', 409);
        }

        throw new ServerError('DUPLICATE_CONSTRAINT', 409);

    }
    throw error;
}
