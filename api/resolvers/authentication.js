import { authenticateFacebook } from '../passport';
import { upsertUser } from '../repository/UserRepository';
import User from '../model/User';

const authenticationResolver = {
  Query: {
    loginFacebook: async (root, { token }, { req, res }) => {
      req.body.access_token = token;

      try {
        const { data, info } = await authenticateFacebook(req, res);
        if (data) {
          const user = new User(data.profile);
          await upsertUser(user);

          return {
            success: true,
            message: 'Authentication success',
            token: user.generateJWT(),
          };
        }

        if (info) {
          return {
            success: false,
            message: 'Authentication failed',
          };
        }
        return (Error('server error'));
      } catch (error) {
        return error;
      }
    },
  },
};

export default authenticationResolver;
  