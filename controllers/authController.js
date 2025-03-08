// Description: Handles user authentication
import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { hashPassword } from "../utils/passwordUtils.js";

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

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide all values");
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials");
    }

    // const token = user.createJWT();
    user.password = undefined;

    res.status(StatusCodes.OK).json({ user });
    // , token });
  } catch (error) {
    next(error);
  }
};

/**
 * Authentication Controller
 * Handles user registration and authentication processes
 */
// import { StatusCodes } from "http-status-codes";
// import UserService from "../services/UserService.js";
// import AuthService from "../services/AuthService.js";
// import { BadRequestError } from "../errors/customErrors.js";

// /**
//  * Authentication Controller using Dependency Injection pattern
//  */
// class AuthController {
//   constructor(userService, authService) {
//     this.userService = userService;
//     this.authService = authService;
//   }

//   /**
//    * Register a new user
//    * @param {Object} req - Express request object
//    * @param {Object} res - Express response object
//    * @param {Function} next - Express next middleware function
//    */
//   register = async (req, res, next) => {
//     try {
//       // Validate request data
//       this.validateRegistrationData(req.body);

//       // Determine user role based on system state
//       const role = await this.userService.determineUserRole();

//       // Create user with appropriate role
//       const userData = { ...req.body, role };
//       const user = await this.userService.createUser(userData);

//       // Generate authentication token
//       const token = this.authService.generateToken(user);

//       // Return sanitized user data and token
//       res.status(StatusCodes.CREATED).json({
//         user: this.userService.sanitizeUser(user),
//         token,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };

//   /**
//    * Validate user registration data
//    * @param {Object} userData - User registration data
//    * @throws {BadRequestError} If validation fails
//    */
//   validateRegistrationData(userData) {
//     const { name, email, password } = userData;

//     if (!name || !email || !password) {
//       throw new BadRequestError("Please provide all required fields");
//     }

//     // Additional validation could be added here
//   }
// }

// // Service implementations
// class UserServiceImpl {
//   /**
//    * Determine the role for a new user based on system state
//    * @returns {Promise<string>} The appropriate role
//    */
//   async determineUserRole() {
//     const isFirstAccount = (await User.countDocuments({})) === 0;
//     return isFirstAccount ? "admin" : "user";
//   }

//   /**
//    * Create a new user in the database
//    * @param {Object} userData - User data to create
//    * @returns {Promise<Object>} Created user object
//    */
//   async createUser(userData) {
//     return await User.create(userData);
//   }

//   /**
//    * Remove sensitive information from user object
//    * @param {Object} user - User object to sanitize
//    * @returns {Object} Sanitized user object
//    */
//   sanitizeUser(user) {
//     return {
//       name: user.name,
//       email: user.email,
//       lastName: user.lastName,
//       location: user.location,
//       role: user.role,
//     };
//   }
// }

// class AuthServiceImpl {
//   /**
//    * Generate authentication token for user
//    * @param {Object} user - User object
//    * @returns {string} JWT token
//    */
//   generateToken(user) {
//     return user.createJWT();
//   }
// }

// // Create service instances
// const userService = new UserServiceImpl();
// const authService = new AuthServiceImpl();

// // Create and export controller instance
// const authController = new AuthController(userService, authService);
// export const { register } = authController;

// // For testing and dependency injection
// export { AuthController, UserServiceImpl, AuthServiceImpl };
