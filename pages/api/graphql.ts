import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { resolvers } from 'graphql/server/resolvers';
import { typeDefs } from 'graphql/server/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Context } from 'types';

// compartiendo un cliente de prisma con todo mi servidor, para eso sirve el context
const prisma = new PrismaClient();
const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler<NextApiRequest, Context>(server, {
  context: async (req:NextApiRequest, res:NextApiResponse) => ({
    req,
    res,
    db: prisma, 
  }),
});