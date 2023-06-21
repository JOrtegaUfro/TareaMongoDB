import {Router} from 'express';
import {createMessage,deleteMessage} from '../controller/message.controller.js';
const router = Router();

router.post('', createMessage);

router.get('/:messageId', deleteMessage);


export default router;