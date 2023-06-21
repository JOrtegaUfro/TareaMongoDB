import {Router} from 'express';
import { createUser } from '../controller/user.controller.js';
const router = Router();

router.post("/register", createUser);

router.post("/login", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const login = {
        "nombre": name,
        "password": password
    };
    return res.send({login});
});



export default router;