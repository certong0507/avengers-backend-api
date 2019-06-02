"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

        return [
            await queryInterface.addColumn("heroes", "username", {
                type: Sequelize.STRING,
                after: "status",
            }),
            await queryInterface.addColumn("heroes", "password", {
                type: Sequelize.STRING,
                after: "username",
            }),
        ];
    },

    down: async (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

        return [
            await queryInterface.removeColumn("heroes", "username"),
            await queryInterface.removeColumn("heroes", "password"),
        ];
    },
};
