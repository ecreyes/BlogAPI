const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  let token = req.get('token');
  jwt.verify(token, process.env.JWTSeed, (error, decoded) => {
    if (error) {
      return res.json({
        ok: false,
        error
      });
    }
    req.user = decoded.user;
    next();
  });

}


module.exports = {
  verifyToken
}