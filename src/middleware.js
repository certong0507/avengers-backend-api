const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authenticateToken = (req, res, next) => {
    let token = req.header["x-access-token"] || req.header["authorization"];

    if (token.startWith("Bearer")) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, JWT_SECRET_KEY, (error, decode) => {
            if (error) {
                throw new Error("Token is not valid");
            } else {
                req.decode = decode;
                next();
            }
        });
    } else {
        throw new Error("Auth token is not supplied");
    }
};

module.exports = {
    authenticateToken,
};
