import { GraphQLNonNull } from 'graphql/index.js';

import { UUIDType } from '../types/uuid.js';
import { ChangePostType, CreatePostType, PostType } from '../types/post.js';
import { ChangeUserType, CreateUserType, UserType } from '../types/user.js';
import { CreateProfileType, ProfileType } from '../types/profile.js';
import { IContext } from '../interface/context.interface.js';
import { IChangeUser, ISubscribeTo, IUnsubscribeFrom, IUser } from '../interface/user.interface.js';
import { IChangeProfile, IProfile } from '../interface/profile.interface.js';
import { IChangePost, IPost } from '../interface/post.interface.js';



export const createPostMutation = {
    type: PostType,
    args: {
        dto: {
            type: new GraphQLNonNull(CreatePostType),
        },
    },
    resolve: async (source: any, args: IPost, context: IContext) => {
        return context.prisma.post.create({
            data: args.dto
        });
    },
};

export const changePostMutation = {
    type: PostType,
    args: {
        id: { type: new GraphQLNonNull(UUIDType) },
        dto: {
            type: new GraphQLNonNull(ChangePostType),
        },
    },
    resolve: async (source: any, args: IChangePost, context: IContext) => {
        return context.prisma.post.update({
            where: {
                id: args.id
            },
            data: args.dto
        });
    },
};

export const deletePostMutation = {
    type: new GraphQLNonNull(UUIDType),
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: IContext) => {
        await context.prisma.post.delete({
            where: {
                id: args.id
            }
        });
        return args.id;
    },
};

export const createUserMutation = {
    type: UserType,
    args: {
        dto: {
            type: new GraphQLNonNull(CreateUserType),
        },
    },
    resolve: async (source: any, args: IUser, context: IContext) => {
        return context.prisma.user.create({
            data: args.dto
        });
    },
};

export const changeUserMutation = {
    type: UserType,
    args: {
        id: { type: new GraphQLNonNull(UUIDType) },
        dto: {
            type: new GraphQLNonNull(ChangeUserType),
        },
    },
    resolve: async (source: any, args: IChangeUser, context: IContext) => {
        return context.prisma.user.update({
            where: {
                id: args.id,
            },
            data: args.dto
        });
    },
};

export const deleteUserMutation = {
    type: new GraphQLNonNull(UUIDType),
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: IContext) => {
        await context.prisma.user.delete({
            where: {
                id: args.id
            }
        });
        return args.id;
    },
};

export const createProfileMutation = {
    type: ProfileType,
    args: {
        dto: {
            type: new GraphQLNonNull(CreateProfileType),
        },
    },
    resolve: async (source: any, args: IProfile, context: IContext) => {
        return context.prisma.profile.create({
            data: args.dto
        });
    },
};

export const changeProfileMutation = {
    type: ProfileType,
    args: {
        id: { type: new GraphQLNonNull(UUIDType) },
        dto: {
            type: new GraphQLNonNull(ChangePostType),
        },
    },
    resolve: async (source: any, args: IChangeProfile, context: IContext) => {
        return context.prisma.profile.update({
            where: {
                id: args.id
            },
            data: args.dto
        });
    },
};

export const deleteProfileMutation = {
    type: new GraphQLNonNull(UUIDType),
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: IContext) => {
        await context.prisma.profile.delete({
            where: {
                id: args.id
            }
        });
        return args.id;
    },
}

export const subscribeToMutation = {
    type: UserType,
    args: {
        userId: {
            type: new GraphQLNonNull(UUIDType),
        },
        authorId: {
            type: new GraphQLNonNull(UUIDType),
        },
    },
    resolve: async (source: any, args: ISubscribeTo, context: IContext) => {
        return await context.prisma.user.update({
            where: {
                id: args.userId,
            },
            data: {
                userSubscribedTo: {
                    create: {
                        authorId: args.authorId,
                    },
                },
            },
        });
    },
}

export const unsubscribeFromMutation = {
    type: UUIDType,
    args: {
        userId: {
            type: new GraphQLNonNull(UUIDType),
        },
        authorId: {
            type: new GraphQLNonNull(UUIDType),
        },
    },
    resolve: async (source: any, args: IUnsubscribeFrom, context: IContext) => {
        await context.prisma.subscribersOnAuthors.delete({
            where: {
                subscriberId_authorId: {
                    subscriberId: args.userId,
                    authorId: args.authorId,
                },
            }
        });
        return args.userId;
    },
}
