const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (userData) => {
    
  // 1. Vérifier si l'utilisateur existe déjà
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error('Cet email est déjà utilisé.');
  }

  // 2. Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // 3. Sauvegarder
  const newUser = await User.create({
    ...userData,
    password: hashedPassword
  });

  return newUser;
};