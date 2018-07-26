// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const attendances = sequelizeClient.define(
    'attendances',
    {
      comment: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM(
          'present',
          'late',
          'leftEarly',
          'lateLeftEarly',
          'excusedAbsence',
          'unexcusedAbsence'
        ),
        allowNull: false
      }
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
  attendances.associate = function (models) {
    attendances.belongsTo(models.students)
    attendances.belongsTo(models.class_sessions)
  }

  return attendances
}
