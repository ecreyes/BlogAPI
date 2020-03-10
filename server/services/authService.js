const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    let newUser = new User({
      username,
      email,
      password: bcrypt.hashSync(password, 10)
    });
    newUser.save((error, userDB) => {
      if (error)
        return reject({ ok: false, message: error })
      else
        return resolve({ ok: true, userDB })
    });

  });
}

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email }, (error, userDB) => {
      if (error)
        return reject({ ok: false, error });
      if (!userDB)
        return reject({ ok: false, error: { mensaje: '(email) o password wrong.' } });
      if (!bcrypt.compareSync(password, userDB.password))
        return reject({ ok: false, error: { mensaje: 'email o (password) incorrectos.' } });
      if (!userDB.state) {
        return reject({ ok: false, error: { mensaje: 'the account has been disabled' } });
      }
      let token = generateToken(userDB);
      return resolve({ ok: true, userDB, token });
    });
  });
}

const generateToken = (userDB) => {
  let token = jwt.sign({ user: userDB }, process.env.JWTSeed, { expiresIn: process.env.JWTExpire });
  return token;
}

module.exports = {
  createUser,
  login
}