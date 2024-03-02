import {
    GraphQLEnumType, GraphQLFloat,
    GraphQLInt,
    GraphQLObjectType,
} from 'graphql/index.js';
import { MemberTypeId } from '../../member-types/schemas.js';

export const MemberIdType = new GraphQLEnumType({
    name: 'MemberIdType',
    values: {
        [MemberTypeId.BASIC]: { value: MemberTypeId.BASIC },
        [MemberTypeId.BUSINESS]: { value: MemberTypeId.BUSINESS },
    }
});

export const MemberType = new GraphQLObjectType({
    name: 'MemberType',
    fields: () => ({
        id: { type: MemberIdType },
        discount: { type: GraphQLFloat  },
        postsLimitPerMonth: { type: GraphQLInt },
    })
});
