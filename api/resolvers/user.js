import { getUserById } from '../repository/UserRepository';
import { ValidationError } from 'apollo-server';
import { merge } from 'lodash';

const userResolver = {
  Query: {
    getCurrentUser: async (root, params, { user }) => getUserById(user.id),
    getTest: () => 'hello world',
  },
};

export default userResolver;
  