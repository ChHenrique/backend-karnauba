import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'; // fallback fora do Docker
export const redis = new Redis(redisUrl);
