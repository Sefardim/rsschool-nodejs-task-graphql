import { PrismaClient, Profile, Post } from '@prisma/client';
import DataLoader from 'dataloader';
import { DefaultArgs, PrismaClientOptions } from '@prisma/client/runtime/library.js';


export interface Loaders {
    postLoader: DataLoader<string, Post[]>;
    profileLoader: DataLoader<string, Profile>;
}

export interface IContext {
    prisma: PrismaClient<PrismaClientOptions, never, DefaultArgs>;
    loaders: Loaders
}