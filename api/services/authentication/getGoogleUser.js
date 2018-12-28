import { ApolloError } from 'apollo-server';
import axios from 'axios';

const uri = 'https://www.googleapis.com/oauth2/v3/userinfo';

export const getGoogleUser = async (accessToken) => {
  if (!accessToken) {
    return null;
  }

  return axios.get(`${uri}?access_token=${accessToken}`)
    .catch(() => {
      throw new ApolloError('Invalid google token.', 'INVALID_USER_GOOGLE');
    });
};

export default getGoogleUser;
