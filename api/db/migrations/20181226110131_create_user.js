exports.up = function(knex) {
  return knex.schema.createTable('user', function(t) {
    t.string('id').primary();
    t.string('username').notNull();
    t.string('email').notNull().unique();

    t.index('username');
    t.index('email');

    t.unique(['username', 'email']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};

