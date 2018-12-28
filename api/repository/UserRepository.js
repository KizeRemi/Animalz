import uuid from 'uuid';
import knex from '../database';

export const getUserById = (id) => {
  return knex
    .select('id', 'username', 'email')
    .from('user')
    .where('id', id)
    .first();
};

export const getUserByEmail = (email) => {
  return knex
    .select()
    .from('user')
    .where('email', email)
    .first();
};

export const checkUserByEmail = (email) => {
  return knex
    .select('id')
    .from('user')
    .where('email', email)
    .first();
};

export const createUser = (email, username) => {
  return knex('user')
    .insert({
      id: uuid.v4(),
      email,
      username,
    })
    .returning('id');
};
