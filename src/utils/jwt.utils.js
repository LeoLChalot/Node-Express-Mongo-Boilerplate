const jwt = require("jsonwebtoken");
const config = require("#config/index");

const jwtSecret = config.jwtSecret || ""

const generateJWT = (payload = {}) => {

    return jwt.sign(payload, jwtSecret, { expiresIn: '24h' });
}

const validateJWT = (token) => {
    return jwt.verify(token, jwtSecret);
}

module.exports = {
    generateJWT,
    validateJWT
}