
exports.up = function(knex) {
  return knex.schema.table('Children', table => {
      table.integer("Streak").defaultTo(0).notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.table('Children', table => {
      table.dropColumn('Streak')
  });
};
