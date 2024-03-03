import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql/index.js';

import { UUIDType } from './uuid.js';
import { MemberEnumTypeId, MemberType } from './member-type.js';
import { UserType } from './user.js';
import { IContext } from '../interface/context.interface.js';


export const ProfileType = new GraphQLObjectType({
    name: 'Profile',
    fields: () => ({
        id: { type: UUIDType },
        isMale: { type: GraphQLBoolean },
        yearOfBirth: { type: GraphQLInt },
        userId: { type: UUIDType },
        memberTypeId: { type: MemberEnumTypeId },
        user: {
            type: UserType,
            resolve: async (source: any, args: any, context: IContext) => {
                return await context.prisma.user.findUnique({
                    where: { id: source.userId }
                });
            }
        },
        memberType: {
            type: new GraphQLNonNull(MemberType),
            resolve: async (source: any, args: any, context: IContext) => {
                return await context.prisma.memberType.findUnique({
                    where: {
                        id: source.memberTypeId,
                    },
                });
            },
        }
    })
})

export const CreateProfileType = new GraphQLObjectType({
    name: 'CreateProfileInput',
    fields: () => ({
        isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
        yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
        userId: { type: new GraphQLNonNull(UUIDType) },
        memberTypeId: { type: new GraphQLNonNull(MemberEnumTypeId) },
    })
});

export const ChangeProfileType = new GraphQLObjectType({
    name: 'ChangeProfileType',
    fields: () => ({
        // memberTypeId: { type: UUIDType },
        isMale: { type: GraphQLBoolean },
        yearOfBirth: { type: GraphQLInt }
    })
});