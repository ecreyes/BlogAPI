// ===================
//   Puerto
// ===================
process.env.PORT = process.env.PORT || 2000;

// =======================
//  JWT   60*1000 = 1 min
//        60*1000*60 = 1 hora
// =======================
process.env.JWTExpire = process.env.JWTExpire || 60*1000*60*24;
process.env.JWTSeed = process.env.JWTSeed ||'seed-development';