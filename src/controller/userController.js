import { User } from "../schema/model.js";

export const userController = async (req, res, next) => {
  try {
    let result = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserController = async (req, res, next) => {
  try {
    let result = await User.find({});
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUserController = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    let user = await User.findOne({ username: username, password: password });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
