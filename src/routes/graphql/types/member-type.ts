import {
    GraphQLEnumType, GraphQLFloat,
    GraphQLInt, GraphQLList, GraphQLNonNull,
    GraphQLObjectType,
} from 'graphql/index.js';

import { MemberTypeId } from '../../member-types/schemas.js';
import { ProfileType } from './profile.js';
import { IContext } from '../interface/context.interface.js';

export const MemberEnumTypeId = new GraphQLEnumType({
    name: 'MemberTypeId',
    values: {
        [MemberTypeId.BASIC]: { value: MemberTypeId.BASIC },
        [MemberTypeId.BUSINESS]: { value: MemberTypeId.BUSINESS },
    }
});

export const MemberType = new GraphQLObjectType({
    name: 'MemberType',
    fields: () => ({
        id: { type: new GraphQLNonNull(MemberEnumTypeId) },
        discount: { type: GraphQLFloat  },
        postsLimitPerMonth: { type: GraphQLInt },
        profiles: {
            type: new GraphQLList(ProfileType),
            resolve: async (source: any, args: any, context: IContext) => {
                return await context.prisma.profile.findMany({
                    where: {
                        memberTypeId: args.id,
                    },
                });
            },
        },
    })
});
