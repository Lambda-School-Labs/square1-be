
exports.up = function(knex) {
    return knex.schema
    .createTable('coaches', coaches => {
        coaches.increments()
        coaches.string('email', 128).notNullable().unique()
        coaches.string('password', 128).notNullable()
        coaches.string('firstname', 128).notNullable()
        coaches.string('lastname', 128).notNullable()
        coaches.integer('is_active', 1).defaultTo(1).notNullable()
        coaches.string('language', 128)
        coaches.string('timezone', 128)
        coaches.string('picture_url', 500)
        coaches.string('city')
        coaches.string('country')
        coaches.string('bio', 10000)
        coaches.string('certifications', 1000) // This will not always be a string
        coaches.string('awards')                // This will not always be a string
        coaches.string('specialties')           // This will not always be a string
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('coaches')
};
