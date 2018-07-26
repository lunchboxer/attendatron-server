// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const semesters = sequelizeClient.define(
    'semesters',
    {
      year: {
        type: DataTypes.STRING(2),
        allowNull: false
      },
      season: {
        type: DataTypes.ENUM('Fall', 'Spring'),
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      validate: {
        endsAfterItStarts () {
          const ends = new Date(this.endsAt)
          const starts = new Date(this.startsAt)
          if (ends <= starts) {
            throw new Error('End date must be after start date.')
          }
        }
      },
      hooks: {
        beforeCount (options) {
          options.raw = true
        }
      }
    }
  )

  // eslint-disable-next-line no-unused-vars
  semesters.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  }

  return semesters
}
