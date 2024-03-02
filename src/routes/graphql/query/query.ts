import { GraphQLObjectType } from 'graphql/index.js';
import {
    memberTypeQuery,
    memberTypesQuery,
    postQuery,
    postsQuery,
    profileQuery,
    profilesQuery,
    userQuery,
    usersQuery
} from './queries.js';

export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        memberType: memberTypeQuery,
        memberTypes: memberTypesQuery,
        post: postQuery,
        posts: postsQuery,
        user: userQuery,
        users: usersQuery,
        profile: profileQuery,
        profiles: profilesQuery
    })
});