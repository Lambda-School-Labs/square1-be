exports.up = function(knex) {
  return knex.schema.createTable('specialties', specialty => {
    specialty.uuid('id').unique().notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'))
    specialty.string('name')
      .notNullable()
      .unique();

    specialty.string('icon_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('specialties');
};
