import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token not provided or not formatted correctly' });
    }
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }
    jwt.verify(token, 'Authorization', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token authentication failed' });
        }
        req.user = decoded;
        next();
    });
};

export default authMiddleware;
