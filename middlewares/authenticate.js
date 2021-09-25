import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    const authToken = req.header("x-auth-token");
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send();
  }
};

export default { authenticate };
