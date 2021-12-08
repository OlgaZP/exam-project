'use strict';

const demoUsersData = [];

for (let i = 0; i < 10; i++) {
  let currentRole = Math.random() > 0.5 ? 'creator' : 'customer';
  demoUsersData.push({
    firstName: `${currentRole}Firstname ${i}`,
    lastName: `${currentRole}Lastname ${i}`,
    displayName: `${currentRole}Displayname ${i}`,
    password: `${currentRole}${i}`,
    email: `${currentRole}${i}@gmail.com`,
    role: `${currentRole}`,
    rating: Math.trunc(Math.random() * 5),
  });
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', demoUsersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'Users',
      { id: { [Sequelize.Op.between]: [4, 13] } },
      {}
    );
  },
};
