const mongoose = require('mongoose');
const config = require('#config/index');

const connectDB = async () => {
  try {
    // Vérification de sécurité basique
    if (!config.databaseURL) {
      throw new Error('La variable MONGODB_URI est manquante dans le fichier .env');
    }

    const connection = await mongoose.connect(config.databaseURL, {
      // Options recommandées pour éviter les avertissements de dépréciation
    });
    
    return connection.connection;

  } catch (error) {
    console.error(`❌ Erreur de connexion MongoDB : ${error.message}`);
    // Arrêter le processus si la DB est critique
    process.exit(1);
  }
};

module.exports = connectDB;