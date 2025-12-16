const userService = require('../services/userService');

exports.register = async (req, res, next) => {
  try {

    // 1. Extraction des données
    const { email, password, name } = req.body;

    // 2. Appel du Service
    const user = await userService.createUser({ email, password, name });

    // 3. Réponse HTTP formatée
    res.status(201).json({
      success: true,
      data: { id: user._id, email: user.email },
      message: "Utilisateur créé avec succès"
    });

  } catch (error) {
    
    // 4. Gestion d'erreur
    next(error); 
  }
};