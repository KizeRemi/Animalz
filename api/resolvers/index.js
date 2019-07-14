import { merge } from 'lodash';
import userResolver from './user';
import authenticationResolver from './authentication';

module.exports = merge(
  userResolver,
  authenticationResolver,
);
