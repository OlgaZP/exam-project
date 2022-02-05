'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate (models) {
      // define association here
      Message.belongsTo(models.Users);
    }
  }
  Message.init(
    {
      body: DataTypes.STRING,
      conversationId: DataTypes.INTEGER,
      sender: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Message',
    }
  );
  return Message;
};
