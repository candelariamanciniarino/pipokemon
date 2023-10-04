const {Router} = require('express');
const {getTypeHandler} = require('../handlers/TypeHandlers');
const typeRouter = Router()

typeRouter.get('/',getTypeHandler);

module.exports = typeRouter;

