const dotenv = require('dotenv');

// Charge les variables du fichier .env dans process.env
const envFound = dotenv.config();

if (envFound.error) {
  console.warn("⚠️  Fichier .env introuvable  ⚠️");
}

// On exporte un objet de configuration propre
module.exports = {
  port: parseInt(process.env.PORT, 10) || 3000,
  
  // Configuration Base de données
  databaseURL: process.env.MONGODB_URI,
  
  // Configuration JWT
  jwtSecret: process.env.JWT_SECRET,
  
  // Configuration Logs
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  // Configuration CORS
  corsOrigin: process.env.CORS_ORIGIN || '*',

  // Configuration API
  api: {
    prefix: '/api',
  },
};