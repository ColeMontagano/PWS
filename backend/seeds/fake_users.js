
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({email: 'luke.skywalker@jedinet.com'}),
        knex('users').insert({email: 'han_solo@jedinet.com'}),
        knex('users').insert({email: 'kylo_ren@FirstOrder.com'}),
      ]);
    });
};
