import { Unauthenticated } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  console.log(req.cookies);
  const { token } = req.cookies;
  if (!token) {
    throw new Unauthenticated("authentication invalid");
  }
  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    //we put next so we dont get stuck on this middleware
    next();
  } catch (error) {
    throw new Unauthenticated("authentication invalid");
  }
};
