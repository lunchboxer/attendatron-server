// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const courses = sequelizeClient.define(
    'courses',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startWeek: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      endWeek: {
        type: DataTypes.INTEGER,
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
  courses.associate = function (models) {
    courses.belongsTo(models.semesters)
  }

  return courses
}
