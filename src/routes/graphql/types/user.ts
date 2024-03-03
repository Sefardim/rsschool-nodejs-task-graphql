import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql/index.js';
import { UUIDType } from './uuid.js';
import { ProfileType } from './profile.js';
import { PostType } from './post.js';
import { IContext } from '../interface/context.interface.js';

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: UUIDType },
        name: { type: GraphQLString  },
        balance: { type: GraphQLFloat },
        profile: {
            type: ProfileType,
            resolve: async (source: any, args: any, context: IContext) => {
                return context.loaders.profileLoader.load(source.id)
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve: async (source: any, args: any, context: IContext) => {
                return context.loaders.postLoader.load(source.id)
            }
        },
        userSubscribedTo: {
            type: new GraphQLList(UserType),
            resolve: async (source: any, args: any, context: IContext) => {
                return await context.prisma.user.findMany({
                    where: {
                        subscribedToUser: {
                            some: {
                                subscriberId: source.id,
                            },
                        },
                    },
                });
            },
        },
        subscribedToUser: {
            type: new GraphQLList(UserType),
            resolve: async (source: any, args: any, context: IContext) => {
                return await context.prisma.user.findMany({
                    where: {
                        userSubscribedTo: {
                            some: {
                                authorId: source.id,
                            },
                        },
                    },
                });
            },
        }
    })
});

export const CreateUserType = new GraphQLObjectType({
    name: 'CreateUserInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString)  },
        balance: { type: new GraphQLNonNull(GraphQLFloat) }
    })
});

export const ChangeUserType = new GraphQLObjectType({
    name: 'ChangeUserInput',
    fields: () => ({
        name: { type: UUIDType  },
        balance: { type: GraphQLFloat }
    })
});