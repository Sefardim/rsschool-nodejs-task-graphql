import DataLoader from 'dataloader';
import { PrismaClient } from '@prisma/client';

const profileLoader = (prisma: PrismaClient) => {
    return new DataLoader(async (ids) => {
        const profiles = await prisma.profile.findMany({
            where: {
                userId: { in: ids as string[] },
            },
        });
        return ids.map((id) => profiles.find((profile) => profile.userId === id));
    });
};

const postLoader = (prisma: PrismaClient) => {
    return new DataLoader(async (ids) => {
        const posts = await prisma.post.findMany({
            where: {
                authorId: { in: ids as string[] },
            },
        });
        return ids.map((id) => posts.filter((post) => post.authorId === id));
    });
};

export const listOfLoaders = (prisma: PrismaClient) => ({
    profileLoader: profileLoader(prisma),
    postLoader: postLoader(prisma),
});