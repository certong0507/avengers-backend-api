"use strict";
module.exports = (sequelize, DataTypes) => {
    const Hero = sequelize.define(
        "Hero",
        {
            name: DataTypes.STRING,
            status: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        { freezeTableName: true, tableName: "heroes" }
    );
    Hero.associate = function(models) {
        // associations can be defined here
    };
    return Hero;
};
