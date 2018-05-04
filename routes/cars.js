const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController')
const securityMiddleware = require('../middleware/securityMiddleware');
/* GET users listing. */
router.get('/:page?',securityMiddleware.verifyToken, carsController.index);

router.post('/', carsController.create);

router.put('/:id', carsController.update);

router.delete('/:id', carsController.remove);

 
module.exports = router;
/*
CoC- Convention over configuration

API RESTFULL
PUT, GET,POST,DELETE metodos http, la ruta , controlador
el controlador va hacer un archivo javascript que va tener 
MVC
Cars /cars 
metodo  ruta    controlador
get   /cars   CarsControllers.index 
post  /cars   CarsControllers.create
put   /cars/:id  CarsControllers.update(:id)
delete /cars/:id  CarsControllers.remove(:id)


*/ 