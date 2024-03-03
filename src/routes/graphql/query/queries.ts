import { GraphQLList, GraphQLNonNull } from 'graphql/index.js';

import { UUIDType } from '../types/uuid.js';
import { PostType } from '../types/post.js';
import { ProfileType } from '../types/profile.js';
import { UserType } from '../types/user.js';
import { MemberEnumTypeId, MemberType } from '../types/member-type.js';
import { IContext } from '../interface/context.interface.js';

export const postQuery = {
    type: PostType,
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: IContext) => {
        return await context.prisma.post.findUnique({
            where: {
                id: args.id
            }
        });
    },
}

export const postsQuery = {
    type: new GraphQLList(PostType),
    resolve: async (source: any, args: any, context: IContext) => {
        return await context.prisma.post.findMany();
    },
}

export const userQuery = {
    type: UserType,
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: IContext) => {
        return await context.prisma.user.findUnique({
            where: { id: args.id }
        });
    },
}

export const usersQuery = {
    type: new GraphQLList(UserType),
    resolve: async (source: any, args: any, context: IContext) => {
        return await context.prisma.user.findMany();
    },
}

export const profileQuery = {
    type: ProfileType,
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: IContext) => {
        return await context.prisma.profile.findUnique({
            where: {
                id: args.id
            }
        });
    },
}

export const profilesQuery = {
    type: new GraphQLList(ProfileType),
    resolve: async (source: any, args: any, context: IContext) => {
        return await context.prisma.profile.findMany();
    },
}

export const memberTypeQuery = {
    type: MemberType,
    args: { id: { type: new GraphQLNonNull(MemberEnumTypeId) } },
    resolve: async (source: any, args: any, context: IContext) => {
        return context.prisma.memberType.findUnique({
            where: {
                id: args.id
            }
        });
    },
}

export const memberTypesQuery = {
    type: new GraphQLList(MemberType),
    resolve: async (source: any, args: any, context: IContext) => {
        return await context.prisma.memberType.findMany();
    },
}


