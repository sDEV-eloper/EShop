import express from 'express'
import {registerController, loginController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
//router obj
const router = express.Router()

//routing:-
//1. register || method POST
// registerController is a controller function or middleware function responsible for handling the logic associated with user registration.
router.post('/register', registerController)


//2. login || POST
router.post('/login', loginController)

//3. Test Route
router.get('/test',requireSignIn, isAdmin,  testController)



export default router