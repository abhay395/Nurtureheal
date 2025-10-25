import authRouter from './Auth.routes.js';
import express from 'express'
import userRouter from './User.routes.js';

const router = express.Router();
const routes = [
    {
        path: '/auth',
        route: authRouter
    },
    {
        path: '/user',
        route: userRouter
    },

]

routes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router