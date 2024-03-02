import { GraphQLFloat, GraphQLObjectType, GraphQLString } from 'graphql/index.js';
import { UUIDType } from './uuid.js';

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: UUIDType },
        name: { type: GraphQLString  },
        balance: { type: GraphQLFloat }
    })
})

export const CreateUserType = new GraphQLObjectType({
    name: 'CreateUserType',
    fields: () => ({
        name: { type: GraphQLString  },
        balance: { type: GraphQLFloat }
    })
});

export const ChangeUserType = new GraphQLObjectType({
    name: 'ChangeUserType',
    fields: () => ({
        id: { type: UUIDType },
        name: { type: GraphQLString  },
        balance: { type: GraphQLFloat }
    })
});

export const SubscribeToType = new GraphQLObjectType({
    name: 'SubscribeToType',
    fields: () => ({
        userId: { type: UUIDType },
        authorId: { type: UUIDType },
    })
})