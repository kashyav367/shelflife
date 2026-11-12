
import bcrypt from "bcrypt";
import userModel from "./auth-model.js";
import ApiError from "../common/utils/api-error.js";
import {
    generateAccessToken,
    generateRefreshToken
} from "../common/utils/jwt-utils.js";

// SIGNUP
const register = async ({
    firstName,
    lastName,
    username,
    email,
    phoneNumber,
    password
}) => {

    // 1. Validate required fields
    if (
        !firstName?.trim() ||
        !lastName?.trim() ||
        !username?.trim() ||
        !email?.trim() ||
        !phoneNumber?.trim() ||
        !password
    ) {
        throw ApiError.badRequest("All fields are required");
    }

    // 2. Normalize input
    firstName = firstName.trim();
    lastName = lastName.trim();
    username = username.trim().toLowerCase();
    email = email.trim().toLowerCase();
    phoneNumber = phoneNumber.trim();

    // 3. Validate password
    if (password.length < 8) {
        throw ApiError.badRequest(
            "Password must be at least 8 characters"
        );
    }

    // 4. Check duplicate email or username
    const userExist = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    if (userExist) {
        throw ApiError.forbidden(
            "Email or username already exists"
        );
    }

    // 5. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 6. Create user
    const newUser = await userModel.create({
        firstName,
        lastName,
        username,
        email,
        phoneNumber,
        password: hashedPassword
    });

    // 7. Return user details (without password)
    return {
        userId: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber
    };
};


// LOGIN
const login = async ({ email, password }) => {

    if (!email?.trim() || !password) {
        throw ApiError.badRequest("Email and password are required");
    }

    // 1. Normalize email
    email = email.trim().toLowerCase();

    // 2. Find user
    const userExist = await userModel.findOne({ email });

    if (!userExist) {
        throw ApiError.forbidden("Invalid email or password");
    }

    // 3. Compare password
    const correctPassword = await bcrypt.compare(
        password,
        userExist.password
    );

    if (!correctPassword) {
        throw ApiError.forbidden("Invalid email or password");
    }

    // 4. Generate tokens
    const accessToken = generateAccessToken({
        userId: userExist._id
    });

    const refreshToken = generateRefreshToken({
        userId: userExist._id
    });

    // 5. Return response
    return {
        accessToken,
        refreshToken,
        user: {
            userId: userExist._id,
            firstName: userExist.firstName,
            lastName: userExist.lastName,
            username: userExist.username,
            email: userExist.email,
            phoneNumber: userExist.phoneNumber
        }
    };
};

export { register, login };
