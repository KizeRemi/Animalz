import { createUser, getUserById, getUserByEmail } from '../repository/UserRepository';
import { ValidationError } from 'apollo-server';

const userResolver = {
  Query: {
    logIn: async (root, params, { user }) => {
      let userId = user.isRegistered;
      if (!userId) {
        const rows = await createUser(user.email, user.given_name)
        .catch(() => {
          throw new ValidationError('An error has occured.');  
        });
        userId = rows[0];
      }

      return getUserById(userId)
        .catch((err) => {
          throw new ValidationError(err.message);  
        });
    },
    getCurrentUser: async (root, params, { user }) => getUserByEmail(user.email),
  },
};

export default userResolver;
  