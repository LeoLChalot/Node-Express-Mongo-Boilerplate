# Structure du dossier de projet
```plaintext
mon-projet-api/
├── src/                # Tout le code source de l'application
│   ├── config/         # Variables d'env, config DB, config logger
│   ├── controllers/    # Gère les requêtes (req) et réponses (res)
│   ├── services/       # Logique métier (Le cœur de l'app)
│   ├── models/         # Schémas de base de données (Mongoose, Sequelize)
│   ├── routes/         # Définition des URLs et liaison avec les contrôleurs
│   ├── middlewares/    # Express middlewares (Auth, upload, validation)
│   ├── utils/          # Fonctions utilitaires (Helpers, formatage dates)
│   ├── loaders/        # (Optionnel) Initialisation (DB, Express, Jobs)
│   └── index.js        # Point d'entrée de l'application
├── .env                # Variables d'environnement
├── .gitignore
├── package.json
└── README.md
```

## Dependances
```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "mongoose": "^9.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}
```