const express = require('express');
const Cars = require('../models/cars');

function index(request, response, next) {
  const page = request.params.page ? request.params.page : 1;
  Cars.paginate({}, {
    page: page,
    limit: 3
  }, (err, objs) => {
    if (err) {
      response.json({
        error: true,
        message: 'no se pudo extraer los usuarios',
        objs: {}
      });
    } else {
      response.json({
        error: false,
        message: 'Lista de carros',
        objs: objs
      });
    }
  });
}

function create(request, response, next) {
  const model = request.body.model;
  const description = request.body.description;
  const status = request.body.status;
  const color = request.body.color;

  let cars = new Cars();
  cars.model = model;
  cars.description = description;
  cars.status = status;
  cars.color = color;

  cars.save((err, obj) => {
    if (err) {
      response.json({
        error: true,
        message: 'carro no  Guardada',
        objs: {}
      });
    } else {
      response.json({
        error: false,
        message: 'carro Guardada',
        objs: obj
      });
    }
  });
}

function update(request, response, next) {
  response.send("estas en /cars/ -> put");
}

function remove(request, response, next) {
  const id = request.params.id;
  if (id) {
    Cars.remove({
      _id: id
    }, function(err) {
      if (err) {
        response.json({
          error: true,
          message: 'carro no Eliminada',
          objs: {}
        });
      } else {
        response.json({
          error: false,
          message: 'carro Eliminada',
          objs: {}
        });
      }
    });
  } else {
    response.json({
      error: true,
      message: 'carro no Existe',
      objs: {}
    });
  }
}

module.exports = {
  index,
  create,
  update,
  remove
};