const faker = require('faker');
const bc = require('bcryptjs');

const children = [...new Array(8)].map((i, idx) => ({
  Name: `${faker.name.firstName()}`,
  PIN: `${bc.hashSync(`0000`, process.env.BCRYPT_ROUNDS || 6)}`,
  ParentID: `${Math.floor((idx + 4) / 4)}`,
  AvatarID: `${faker.random.number({ min: 1, max: 8 })}`,
  GradeLevelID: `${faker.random.number({ min: 1, max: 6 })}`,
  CohortID: 1,
  IsDyslexic: `${faker.random.boolean()}`,
  Wins: `${faker.random.number({min:1, max: 10})}`,
  Losses: `${faker.random.number({min:1, max: 10})}`,
  // Total_Points: 0
}));

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('Children').insert(children);
};
