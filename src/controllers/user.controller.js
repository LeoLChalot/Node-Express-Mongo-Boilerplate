const userService = require('#services/user.service');

exports.SignUp = async (req, res, next) => {
  console.log("USERS::CONTROLLER::SignUp");
  console.table(req.body);
  try {

    // 1. Extraction des données
    const { email, password, name } = req.body;

    // 2. Appel du Service
    const user = await userService.signUpUser({ email, password, name });

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

exports.SignIn = async (req, res, next) => {
  console.log("USERS::CONTROLLER::SignIn");
  console.table(req.body);
  try {
    const { email, password } = req.body;

    const result = await userService.signInUser({ email, password });

    return res.status(result.statusCode).json(result);
  } catch (error) {
    console.error("USERS::CONTROLLER::SignIn", error);
    return res.status(500).json({
      error: true,
      message: "Une erreur interne est survenue, veuillez réessayer plus tard.",
    });
  }
};

exports.GetUsers = async (req, res, next) => {
  console.log("USERS::CONTROLLER::GetUsers");
  try {
    const users = await userService.getUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

exports.GetUserById = async (req, res, next) => {
  console.log("USERS::CONTROLLER::GetUserById");
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

exports.UpdateUser = async (req, res, next) => {
  console.log("USERS::CONTROLLER::UpdateUser");
  try {
    const userId = req.params.id;
    const updateData = req.body;
    const updatedUser = await userService.updateUser(userId, updateData);
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    next(error);
  }
};

exports.DeleteUser = async (req, res, next) => {
  console.log("USERS::CONTROLLER::DeleteUser");
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);
    res.status(200).json({ success: true, message: 'Utilisateur supprimé avec succès.' });
  } catch (error) {
    next(error);
  }
};