import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

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
