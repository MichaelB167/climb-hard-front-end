'use strict';

const app = require('../app-data');

const getGymsSuccess = (data) => {
  app.gyms = data.gyms;
  console.log(data);
};

const getClimbsSuccess = (data) => {
  app.gyms = data.gyms;
  console.log(data);
};

const createGymSuccess = (data) => {
  app.gym = data.gym;
  console.log(data);
};

const createClimbSuccess = (data) => {
  app.climb = data.climb;
  console.log(data);
};

module.exports = {
  createClimbSuccess,
  createGymSuccess,
  getGymsSuccess,
  getClimbsSuccess
};