//if token is present then only route to login
//Protected route token base
import JWT from "jsonwebtoken";
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    next();
  } catch (err) {
    res.send(err);
  }
};


