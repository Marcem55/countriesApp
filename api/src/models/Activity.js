const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    duration: {
      type: DataTypes.INTEGER
    },
    season: {
      type: DataTypes.ENUM('Spring', 'Summer', 'Autumn', 'Winter')
    }
  })
}
