import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) res.send({ error: "Name is Required" });
    if (!email) res.send({ error: "email is Required" });
    if (!password) res.send({ error: "password is Required" });
    if (!phone) res.send({ error: "phone is Required" });
    if (!address) res.send({ error: "address is Required" });
    //check user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered please login",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(200).send({
      success: false,
      message: "Register Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      err,
    });
  }
};

//POST

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Username or password",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email not se ",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid Password ",
      });
    }

    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
res.status(200).send({
  success:true,
  message:"Login Success",
  user:{
    name :  user?.name ,
    email :   user?.email,
    address :   user?.address,
    phone :   user?.phone

  },
  token,
})

  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in login page",
      err,
    });
  }
};
