const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

const comparePassword = async (password, hashedPassword) => {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
}

module.exports = {
    hashPassword,
    comparePassword
}