const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController')

/* GET users listing. */
router.get('/:page?', usersController.index);

router.post('/', usersController.create);

router.put('/:id', usersController.update);

router.delete('/:id', usersController.remove);

 
module.exports = router;
/*
CoC- Convention over configuration

API RESTFULL
PUT, GET,POST,DELETE metodos http, la ruta , controlador
el controlador va hacer un archivo javascript que va tener 
MVC
Movie /usuarios 
metodo  ruta    controlador
get   /users   UsuariosControllers.index 
post  /users   UsuariosControllers.create
put   /users/:id  UsuariosControllers.update(:id)
delete /users/:id  UsuariosControllers.remove(:id)


*/ 