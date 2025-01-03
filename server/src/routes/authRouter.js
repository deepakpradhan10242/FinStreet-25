import express from 'express';
import registerUser from '../controllers/registerUser.js';
import loginUser from '../controllers/loginUser.js';
import logoutUser from '../controllers/logoutUser.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
import userAuth from '../middleware/userAuth.js';


const authRouter = express.Router();

authRouter.post('/register',registerUser);

authRouter.post('/login',loginUser);

authRouter.post('/logout',logoutUser);
authRouter.get('/is-auth',userAuth,isAuthenticated);



export default authRouter;
