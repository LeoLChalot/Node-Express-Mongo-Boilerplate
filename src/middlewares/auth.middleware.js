const { validateJWT } = require("#utils/jwt.utils");

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: true,
      message: "Authentification impossible, le token est manquant.",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: true,
      message: "Authentification impossible, le token est manquant.",
    });
  }

  try {
    const decoded = await validateJWT(token);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({
      error: true,
      message:
        "Authentification impossible, le token est invalide ou a expiré.",
    });
  }
};

module.exports = authenticateUser;
