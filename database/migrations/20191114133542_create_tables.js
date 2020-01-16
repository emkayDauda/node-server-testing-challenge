exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments("userId");

    table
      .text("username", 20)
      .notNullable()
      .unique();

    table.text("password").notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
