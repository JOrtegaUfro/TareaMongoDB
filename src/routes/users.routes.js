import {Router} from 'express';
import { listarUsers,mensajeUsuario } from '../controller/user.controller.js';

const router = Router();

router.get('/', listarUsers);
router.get('/:IdUser/messages',mensajeUsuario);


export default router;