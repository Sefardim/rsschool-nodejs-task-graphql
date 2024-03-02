import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql/index.js';
import { UUIDType } from './uuid.js';
import { MemberIdType } from './member-type.js';


export const ProfileType = new GraphQLObjectType({
    name: 'Profile',
    fields: () => ({
        id: { type: UUIDType },
        isMale: { type: GraphQLBoolean },
        yearOfBirth: { type: GraphQLInt },
        userId: { type: UUIDType },
        memberTypeId: { type: MemberIdType },
    })
})

export const CreateProfileType = new GraphQLObjectType({
    name: 'CreateProfileType',
    fields: () => ({
        isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
        yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
        userId: { type: new GraphQLNonNull(UUIDType) },
        memberTypeId: { type: new GraphQLNonNull(MemberIdType) },
    })
});

export const ChangeProfileType = new GraphQLObjectType({
    name: 'ChangeProfileType',
    fields: () => ({
        memberTypeId: { type: UUIDType },
        isMale: { type: GraphQLBoolean },
        yearOfBirth: { type: GraphQLInt }
    })
});