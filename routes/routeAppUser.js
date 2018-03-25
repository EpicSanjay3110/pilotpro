const userCreate  = require('../api/v1usr/createUser');
const userLogin = require('../api/v1usr/appUserLogin');

module.exports  ={
  '/api/v1/user/newAppUser':{
  methods:  ['POST'],
  fn: userCreate.createAppUser
},
  '/api/v1/user/appUserLogin':{
    methods:  ['POST'],
    fn: userLogin.appLogin
  }
}
