import uuid from 'uuid';
import util from 'util';
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

export const upsertUser = (user) => {
  const insert = knex.insert(user).into('user');
  const update = knex.from('user').update(user).returning('*');
  const query = util.format(
    '%s ON CONFLICT (email) DO UPDATE SET %s',
    insert.toString(),
    update.toString().replace(/^update\s.*\sset\s/i, '')
  );

  return knex.raw(query);
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
