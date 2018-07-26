const students = require('./students/students.service.js')
const users = require('./users/users.service.js')
const classes = require('./classes/classes.service.js')
const semesters = require('./semesters/semesters.service.js');
const courses = require('./courses/courses.service.js');
const classSessions = require('./class-sessions/class-sessions.service.js');
const attendances = require('./attendances/attendances.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(students)
  app.configure(users)
  app.configure(classes)
  app.configure(semesters);
  app.configure(courses);
  app.configure(classSessions);
  app.configure(attendances);
}
