import { GraphQLObjectType } from 'graphql/index.js';
import {
    changePostMutation, changeProfileMutation,
    changeUserMutation,
    createPostMutation, createProfileMutation, createUserMutation,
    deletePostMutation, deleteProfileMutation,
    deleteUserMutation, subscribeToMutation, unsubscribeFromMutation
} from './mutations.js';


export const Mutation = new GraphQLObjectType({
    name: 'Mutation',

    fields: () => ({
        createPost: createPostMutation,
        changePost: changePostMutation,
        deletePost: deletePostMutation,

        createUser: createUserMutation,
        changeUser: changeUserMutation,
        deleteUser: deleteUserMutation,

        createProfile: createProfileMutation,
        changeProfile: changeProfileMutation,
        deleteProfile: deleteProfileMutation,

        subscribeTo: subscribeToMutation,
        unsubscribeFrom: unsubscribeFromMutation,
    })
});
