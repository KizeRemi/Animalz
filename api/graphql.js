import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { getGoogleUser } from './services/authentication';
import { checkUserByEmail } from './repository/UserRepository';
import resolvers from './resolvers';
import Knex from './database';
import typeDefs from './definitions/typeDefs';
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const accessToken = req.headers.authorization || '';
    const { data } = await getGoogleUser(accessToken);
    const user = await checkUserByEmail(data.email);
    if (user) {
      data.isRegistered = user.id;
    }
  
    return { postgres: Knex, user: data };
  }
});
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
