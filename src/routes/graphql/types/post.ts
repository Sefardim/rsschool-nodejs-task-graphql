import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql/index.js';
import { UUIDType } from './uuid.js';
import { UserType } from './user.js';
import { IContext } from '../interface/context.interface.js';

export const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: UUIDType },
        title: { type: UUIDType },
        content: { type: UUIDType },
        authorId: {  type: UUIDType },
        author: {
            type: UserType,
            resolve: async (source: any, args: any, context: IContext) => {
                return await context.prisma.user.findUnique({
                    where: {
                        id: source.authorId,
                    },
                });
            },
        },
    })
});

export const CreatePostType = new GraphQLInputObjectType({
    name: 'CreatePostInput',
    fields: () => ({
        title: { type: new GraphQLNonNull(UUIDType) },
        content: { type: new GraphQLNonNull(UUIDType) },
        authorId: { type: new GraphQLNonNull(UUIDType) },
    })
});

export const ChangePostType = new GraphQLInputObjectType({
    name: 'ChangePostInput',
    fields: () => ({
        title: { type: UUIDType },
        content: { type: UUIDType }
    })
})