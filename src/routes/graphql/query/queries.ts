import { GraphQLList, GraphQLNonNull } from 'graphql/index.js';
import { UUIDType } from '../types/uuid.js';
import { PostType } from '../types/post.js';
import { ProfileType } from '../types/profile.js';
import { UserType } from '../types/user.js';
import { MemberIdType, MemberType } from '../types/member-type.js';

export const postQuery = {
    type: PostType,
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return await context.fastify.db.posts.findUnique({
            where: {
                id: args.id
            }
        });
    },
}

export const postsQuery = {
    type: new GraphQLList(PostType),
    resolve: async (source: any, args: any, context: any, info: any) => {
        return await context.fastify.db.posts.findMany();
    },
}

export const userQuery = {
    type: UserType,
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return await context.fastify.db.users.findUnique({
            where: { id: args.id }
        });
    },
}

export const usersQuery = {
    type: new GraphQLList(UserType),
    resolve: async (source: any, args: any, context: any, info: any) => {
        return await context.fastify.db.users.findMany();
    },
}

export const profileQuery = {
    type: ProfileType,
    args: { id: { type: new GraphQLNonNull(UUIDType) } },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return await context.fastify.db.profile.findUnique({
            where: {
                id: args.id
            }
        });
    },
}

export const profilesQuery = {
    type: new GraphQLList(ProfileType),
    resolve: async (source: any, args: any, context: any, info: any) => {
        return await context.fastify.db.profile.findMany();
    },
}

export const memberTypeQuery = {
    type: MemberType,
    args: { id: { type: new GraphQLNonNull(MemberIdType) } },
    resolve: async (source: any, args: any, context: any, info: any) => {
        return context.fastify.db.memberType.findUnique({
            where: {
                id: args.id
            }
        });
    },
}

export const memberTypesQuery = {
    type: new GraphQLList(MemberType),
    resolve: async (source: any, args: any, context: any, info: any) => {
        return await context.fastify.db.memberType.findMany();
    },
}


