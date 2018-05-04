
const express = require('express');
const Usuario = require('../models/users');
const bcrypt = require('bcrypt');
const async = require('async');

function index(request, response, next) {const async = require('async');

  const page = request.params.page ? request.params.page : 1;
  Usuario.paginate({}, {
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
        message: 'Lista de Usuarios',
        objs: objs
      });
    }
  });
}

function create(request, response, next) {
  const nombre = request.body.nombre;
  const password = request.body.password;

  let usuario = new Usuario();
  usuario.nombre = nombre;

  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      usuario.password = hash;
      usuario.salt = salt;

  usuario.save((err, obj) => {
    if (err) {
      response.json({
        error: true,
        message: 'Usuario no guardado',
        objs: {}
      });
    } else {
      delete obj.password;
      delete obj.salt;
      response.json({
        error: false,
        message: 'Usuario Guardado',
        objs: obj
      });
    }
  });
        // Store hash in your password DB.
    });
});

  usuario.save((err, obj) => {
    if (err) {
      response.json({
        error: true,
        message: 'Usuario no guardado',
        objs: {}
      });
    } else {
      response.json({
        error: false,
        message: 'Usuario Guardado',
        objs: obj
      });
    }
  });
}

function update(request, response, next) {
  response.send("estas en /usuarios/ -> put");
}

function remove(request, response, next) {
  const id = request.params.id;
  if (id) {
    Usuario.remove({
      _id: id
    }, function(err) {
      if (err) {
        response.json({
          error: true,
          message: 'Usuario no Eliminado',
          objs: {}
        });
      } else {
        response.json({
          error: false,
          message: 'Usuario Eliminado',
          objs: {}
        });
      }
    });
  } else {
    response.json({
      error: true,
      message: 'Usuario no Existe',
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