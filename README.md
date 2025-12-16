# TP Express 1 - API REST Node.js

Ce projet est une API REST construite avec Node.js, Express et MongoDB. Il sert de base (boilerplate) solide pour le développement d'applications backend, suivant une Architecture en Couches (Layered Architecture) pour assurer scalabilité, testabilité et maintenabilité.

## 🚀 Fonctionnalités

- Structure Modulaire : Séparation stricte des responsabilités (Routes, Contrôleurs, Services, Modèles).

- MongoDB & Mongoose : Gestion des données avec schémas, validation et connexion robuste.

- Configuration Centralisée : Gestion sécurisée des variables d'environnement via dotenv et un module de configuration dédié.

- Architecture Robuste : Injection de dépendances implicite et gestion centralisée des erreurs.

- Health Check : Endpoint dédié à la vérification de l'état du serveur.

- Hot Reload : Développement fluide grâce à nodemon.

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)

- [MongoDB](https://www.mongodb.com/try/download/community) (ou accès à un cluster MongoDB Atlas)

- [Git](https://git-scm.com/)

## 📦 Installation

Suivez ces étapes pour installer et lancer le projet localement :

1. Cloner le projet
```bash
git clone <votre-repo-url>
cd tp-express-1
```

2. Installer les dépendances
```bash
npm install
```


3. Configurer l'environnement
Créez un fichier .env à la racine du projet (au même niveau que package.json). Copiez-y le contenu suivant et adaptez-le si nécessaire :
```
# .env
PORT=3000

# Connexion MongoDB
# Pour Docker ou Localhost, utilisez souvent : mongodb://127.0.0.1:27017/tp_express_db
# Pour Atlas : mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>...
MONGODB_URI=mongodb://127.0.0.1:27017/tp_express_db

# Secret pour la signature des tokens JWT (Futur usage)
JWT_SECRET=votre_secret_tres_securise_et_long

# Niveau de logs (silly, debug, info, warn, error)
LOG_LEVEL=debug
```

## ▶️ Démarrage

### Mode Développement

Utilise nodemon pour redémarrer automatiquement le serveur à chaque modification de fichier. Idéal pour coder.
```bash
npm run dev
```

### Mode Production

Lance le serveur avec l'exécutable node standard.
```bash
npm start
```

Une fois lancé, le serveur sera accessible sur : http://localhost:3000 (ou le port défini dans votre .env).

## 🏗️ Architecture du Projet

L'application suit strictement le modèle Controller-Service-Model pour ne pas mélanger la logique métier avec la logique HTTP.
```plaintext
src/
├── config/             # ⚙️ Configuration
│   └── index.js        # Charge, valide et exporte les variables d'env (.env)
│
├── controllers/        # 🎮 Contrôleurs (Entrée HTTP)
│   └── userController.js # Gère la requête (req), appelle le Service, et envoie la réponse (res)
│
├── services/           # 🧠 Services (Logique Métier)
│   └── userService.js  # Contient le "vrai" code (hashage mdp, règles métier, appels DB)
│
├── models/             # 🗄️ Modèles (Données)
│   └── User.js         # Schéma Mongoose définissant la structure des données
│
├── routes/             # 🚦 Routes
│   └── userRoutes.js   # Définition des URLs et liaison avec les contrôleurs
│
├── loaders/            # 🔌 Initialisation
│   └── mongoose.js     # Script de connexion à la base de données
│
└── index.js            # 🚀 Point d'entrée de l'application (Server entry point)
```

## 🔌 API Endpoints

Voici la liste des routes disponibles actuellement.

### Système

| Méthode |   URL   |                  Description                 |
|:-------:|:-------:|:--------------------------------------------:|
|   GET   | /status | Vérifie si l'API est en ligne (Health Check) |

### Utilisateurs (`/api/users`)

| Méthode |   URL   |                  Description                 |Body Requis (JSON) |
|:-------:|:-------:|:--------------------------------------------:|:----------------:|
| POST |  /register | Inscription d'un utilisateur | { "email": "...", "password": "...", "name": "..." }|

## 🧪 Exemple de Test

Pour tester l'inscription d'un utilisateur (via Postman, Insomnia ou cURL) :

**URL :** `POST http://localhost:3000/api/users/register`

**Headers :** `Content-Type: application/json`

**Body (Raw JSON) :**
```json
{
  "email": "jean.dupont@example.com",
  "password": "monSuperMotDePasse123",
  "name": "Jean Dupont"
}
```

**Réponse attendue (201 Created) :**
```json
{
    "success": true,
    "data": {
        "id": "64f...",
        "email": "jean.dupont@example.com"
    },
    "message": "Utilisateur créé avec succès"
}
```

#### 👤 Auteur
*LeoLChalot*