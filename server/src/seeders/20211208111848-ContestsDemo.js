'use strict';

const demoContestsData = [];

for (let i = 0; i < 10; i++) {
  demoContestsData.push({
    orderId: String(i + 3),
    userId: i + 16,
    contestType: Math.random() > 0.5 ? 'name' : 'logo',
    createdAt: new Date(
      2019 + Math.trunc(Math.random() * 3),
      Math.trunc(Math.random() * 12),
      Math.trunc(Math.random() * 28)
    ),
    status: Math.random() > 0.5 ? 'active' : 'finished',
    prize: 100,
    priority: 1,
  });
}

demoContestsData.push({
  orderId: String(21),
  userId: 2,
  contestType: Math.random() > 0.5 ? 'name' : 'logo',
  createdAt: new Date(2020, 11, 28),
  status: 'active',
  prize: 100,
  priority: 1,
});

demoContestsData.push({
  orderId: String(22),
  userId: 2,
  contestType: Math.random() > 0.5 ? 'name' : 'logo',
  createdAt: new Date(2021, 0, 5),
  status: 'finished',
  prize: 200,
  priority: 1,
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contests', demoContestsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'Contests',
      { id: { [Sequelize.Op.between]: [3, 30] } },
      {}
    );
  },
};
