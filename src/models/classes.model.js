// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const classes = sequelizeClient.define(
    'classes',
    {
      year: {
        type: DataTypes.STRING(2),
        allowNull: false
      },
      major: { type: DataTypes.STRING, allowNull: false },
      number: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
    },
    {
      hooks: {
        beforeCount (options) {
          options.raw = true
        }
      }
    }
  )

  // eslint-disable-next-line no-unused-vars
  classes.associate = function (models) {
    classes.hasMany(models.students)
  }

  return classes
}
