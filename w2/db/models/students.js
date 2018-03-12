'use strict'

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define(
  'student',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    fullName: {
      type: Sequelize.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  },
  {}
);

Student.prototype.initials = function() {
  return `${this.firstName[0]} ${this.lastName[0]}`;
};

module.exports = Student;