import express from 'express'
import {registerController} from '../controllers/authController.js'
//router obj
const router = express.Router()

//routing:-
//1. register || method POST
router.post('/register', registerController)
export default router;