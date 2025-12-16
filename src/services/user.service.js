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

  return newUser;
};

exports.signInUser = async (credentials) => {
  const user = await User.findOne({ email: credentials.email });
  if (!user) {
    return { statusCode: 401, error: true, message: 'Email ou mot de passe incorrect.' };
  }

  const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
  if (!isPasswordValid) {
    return { statusCode: 401, error: true, message: 'Email ou mot de passe incorrect.' };
  }

  const jwtPayload = { id: user._id, email: user.email };
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { statusCode: 200, error: false, message: 'Connexion réussie.', data: { id: user._id, email: user.email, jwt: token } };
};

exports.getUsers = async () => {
  const users = await User.find({}, '-password'); // Exclure les mots de passe
  return users;
};

exports.getUserById = async (userId) => {
  const user = await User.findById(userId, '-password'); // Exclure le mot de passe
  if (!user) {
    throw new Error('Utilisateur non trouvé.');
  }
  return user;
};

exports.updateUser = async (userId, updateData) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true, select: '-password' });
  if (!updatedUser) {
    throw new Error('Utilisateur non trouvé.');
  }
  return updatedUser;
};

exports.deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    throw new Error('Utilisateur non trouvé.');
  }
  return deletedUser;
};