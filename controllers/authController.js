// Description: Handles user authentication
import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";
import { Unauthenticated } from "../errors/customErrors.js";

export const register = async (req, res, next) => {
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";
  req.body.role = role;

  /******  963f48b7-65da-4ecb-a302-c748a799047a  *******/
  try {
    // const salt = await bcrypt.genSalt(10);
    // // req.body.password = await bcrypt.hash(req.body.password, salt);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // req.body.password = hashedPassword;
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);

    // const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
      msg: "User registered successfully",
      user: {
        name: user.name,
        userId: user._id,
        // email: user.email,
        // lastName: user.lastName,
        // location: user.location,
        // password: user.password,
      },
      // token,
    });
  } catch (error) {
    next(error);
  }
};

// /api/auth/login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Unauthenticated("Please provide all values");
    }

    const user = await User.findOne({ email }).select("+password");
    const isPasswordCorrect = await comparePassword(
      req.body.password,
      user.password
    );
    const isValid = user && isPasswordCorrect;
    if (!user) {
      throw new Unauthenticated("Invalid userID");
    }
    if (!isPasswordCorrect) {
      throw new Unauthenticated("Invalid password");
    }
    const token = createJWT({ userId: user._id, role: user.role });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      // signed: true,
      // expires: new Date(Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRE)),
      // sameSite: "strict",
    });
    res.status(StatusCodes.OK).json({ msg: "Logged in !", user, token });
    // user.password = undefined;

    // , token });
  } catch (error) {
    next(error);
  }
};

// logout
export const logout = (req, res, next) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "Successfully logged out !" });
};
