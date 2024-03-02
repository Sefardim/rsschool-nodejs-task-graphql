import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import depthLimit from 'graphql-depth-limit';
import { GraphQLSchema, graphql, parse, validate } from 'graphql';

import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { Query } from './query/query.js';
import { Mutation } from './mutation/mutation.js';

const graphqlDepthLimit = 5;

export const schemaApp = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma } = fastify;

  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      const { query, variables } = req.body;
      const err = validate(schemaApp, parse(query), [depthLimit(graphqlDepthLimit)]);

      if (err?.length > 0) {
        return { data: '', errors: err };
      }

      const { data, errors } = await graphql({
        schema: schemaApp,
        source: query,
        variableValues: variables,
        contextValue: {
          prisma,
        },
      });

      return { data, errors };
    },
  });
};

export default plugin;
