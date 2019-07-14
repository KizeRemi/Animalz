import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

import resolvers from './resolvers';
import Knex from './database';
import typeDefs from './definitions/typeDefs';
import { checkUserByEmail } from './repository/UserRepository';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    const token = req.headers['authorization'] || null;
    let user = null;
    if (token) {
      user = await jwt.verify(token, 'secret', (err, user) => {
        if (err) {
          console.log(err);
        } else {
          return checkUserByEmail(user.email);
        }
      });
    } else {
      console.log('pas de token')
    }
    console.log(user)
    return { req, res, user };
  },
});
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
