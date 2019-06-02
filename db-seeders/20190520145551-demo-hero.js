"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

        return queryInterface.bulkInsert("Heroes", [
            {
                name: "ironman",
                status: 1,
                username: "ironman",
                password: "hirokuu",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "spiderman",
                status: 1,
                username: "spiderman",
                password: "hirokuu",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "thanos",
                status: 1,
                username: "thanos",
                password: "hirokuu",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "thor",
                status: 1,
                username: "thor",
                password: "hirokuu",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
        return queryInterface.bulkDelete("People", null, {});
    },
};
