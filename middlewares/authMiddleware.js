//if token is present then only route to login
//Protected route token base
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user=decode;
    next();
  } catch (err) {
    res.send(err);
  }
};

//admin access
export const isAdmin=async(req, res, next)=>{
    try{
        const user= await userModel.findById(req.user._id);
        if(user.role!==1){
            return res.status(401).send({
                success: false,
                message:"unAuthorized Access"
            })
        }else{
            next();
        }
    }
    catch(err){
        res.status(401).send({
            success:false,
            err,
            message:"Error in admin middleware"
        })
    }
}
