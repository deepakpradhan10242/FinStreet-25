import userModel  from "../models/userModel.js";
import bcryptjs  from "bcrypt";
import jwt  from "jsonwebtoken";

async function registerUser(req, res) {
  try {
    const { name, email, password, branch, rollNo } = req.body;

    const checkEmail = await userModel.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
        error: true,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    const payload = { name, email, password: hashpassword, branch, rollNo };

    const user = new userModel(payload);
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

  
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.status(201).json({
      message: "User created successfully",
      data: user,
      success: true,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

export default registerUser;
