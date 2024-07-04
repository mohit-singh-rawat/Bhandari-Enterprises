const userController = require('../controller/user.controller');

module.exports = function Route (app) {
    app.post('/register',userController.register);
    app.post('/login', userController.login);
}