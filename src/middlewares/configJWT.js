import jwt from 'jsonwebtoken';

const ConfigJWT = {};

ConfigJWT.generateToken = (user) => {
    const payload = { id: user.id, email: user.email };
    const accessToken = jwt.sign(payload, 'Authorization', { expiresIn: 900 });
    return { accessToken, expiresIn: 900 };
};

export default ConfigJWT;