
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coaches').del()
    .then(function () {
      // Inserts seed entries
      return knex('coaches').insert([
        {email: 'test@test.com', firstname: 'Bob', lastname: 'Testperson', password: 'test'},
      ]);
    });
};
