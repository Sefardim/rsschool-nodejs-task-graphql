import { UUIDType } from '../types/uuid.js';
import { ChangePostType, CreatePostType, PostType } from '../types/post.js';
import { ChangeUserType, CreateUserType, SubscribeToType, UserType } from '../types/user.js';
import { CreateProfileType, ProfileType } from '../types/profile.js';



export const createPostMutation = {
    type: PostType,
    args: {
        data: {
            type: CreatePostType,
        },
    },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return context.fastify.db.posts.create({
            data: args.data
        });
    },
};

export const changePostMutation = {
    type: PostType,
    args: {
        id: { type: UUIDType },
        data: {
            type: CreatePostType,
        },
    },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return context.fastify.db.posts.update({
            where: {
                id: args.id
            },
            data: args.data
        });
    },
};

export const deletePostMutation = {
    type: PostType,
    args: { id: { type: UUIDType } },
    resolve: async (source: any, args: any, context: any, info: any) => {
        await context.fastify.db.posts.delete({
            where: {
                id: args.id
            }
        });
    },
};

export const createUserMutation = {
    type: UserType,
    args: {
        data: {
            type: CreateUserType,
        },
    },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return context.fastify.db.users.create({
            data: args.data
        });
    },
};

export const changeUserMutation = {
    type: UserType,
    args: {
        id: { type: UUIDType },
        data: {
            type: ChangeUserType,
        },
    },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return context.fastify.db.users.update({
            where: {
                id: args.id,
            },
            data: args.data
        });
    },
};

export const deleteUserMutation = {
    type: UserType,
    args: { id: { type: UUIDType } },
    resolve: async (source: any, args: any, context: any, info: any) => {
        await context.fastify.db.users.delete({
            where: {
                id: args.id
            }
        });
        return null;
    },
};

export const createProfileMutation = {
    type: ProfileType,
    args: {
        data: {
            type: CreateProfileType,
        },
    },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return context.fastify.db.profiles.create({
            data: args.data
        });
    },
};

export const changeProfileMutation = {
    type: ProfileType,
    args: {
        id: { type: UUIDType },
        data: {
            type: ChangePostType,
        },
    },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return context.fastify.db.profiles.update({
            where: {
                id: args.id
            },
            data: args.data
        });
    },
};

export const deleteProfileMutation = {
    type: ProfileType,
    args: { id: { type: UUIDType } },
    resolve: async (source: any, args: any, context: any, info: any) => {
        await context.fastify.db.profiles.delete({
            where: {
                id: args.id
            }
        });
    },
}

export const subscribeToMutation = {
    type: UserType,
    args: {
        data: {
            type: SubscribeToType,
        },
    },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return context.fastify.db.profiles.create({
            data: args.data
        });
    },
}

export const unsubscribeFromMutation = {
    type: UserType,
    args: {
        data: {
            type: SubscribeToType,
        },
    },
    resolve: async (source: any, args: any, context: any, info: any) => {
        await context.fastify.db.profiles.deleteMany({
            where: {
                userId: args.data.userId,
                authorId: args.data.authorId,
            },
        });
        return null;
    },
}
