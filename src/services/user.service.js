const ApiResponse = require('#utils/apiResponse.util');
const User = require('#models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signUpUser = async (userData) => {
    
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

  return ApiResponse.success({ id: newUser._id, email: newUser.email }, "Utilisateur créé avec succès", 201);
};

exports.signInUser = async (credentials) => {
  const user = await User.findOne({ email: credentials.email });
  if (!user) {
    return ApiResponse.error('Email ou mot de passe incorrect.', 401);
  }

  const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
  if (!isPasswordValid) {
    return ApiResponse.error('Email ou mot de passe incorrect.', 401);
  }

  const jwtPayload = { id: user._id, email: user.email };
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return ApiResponse.success({ token }, "Authentification réussie", 200);
};

exports.getUsers = async () => {
  const users = await User.find({}, '-password'); // Exclure les mots de passe
  return ApiResponse.success(users, "Liste des utilisateurs récupérée avec succès", 200);
};

exports.getUserById = async (userId) => {
  const user = await User.findById(userId, '-password'); // Exclure le mot de passe
  if (!user) {
    return ApiResponse.error('Utilisateur non trouvé.', 404);
  }
  return ApiResponse.success(user, "Utilisateur récupéré avec succès", 200);
};

exports.updateUser = async (userId, updateData) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true, select: '-password' });
  if (!updatedUser) {
    return ApiResponse.error('Utilisateur non trouvé.', 404);
  }
  return ApiResponse.success(updatedUser, "Utilisateur mis à jour avec succès", 200);
};

exports.deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    return ApiResponse.error('Utilisateur non trouvé.', 404);
  }
  return ApiResponse.success(null, "Utilisateur supprimé avec succès", 200);
};