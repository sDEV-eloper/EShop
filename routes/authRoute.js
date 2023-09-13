import express from 'express'
import {registerController, loginController} from '../controllers/authController.js'
//router obj
const router = express.Router()

//routing:-
//1. register || method POST
router.post('/register', registerController)


//2. login || POST
router.post('/login', loginController)



export default router