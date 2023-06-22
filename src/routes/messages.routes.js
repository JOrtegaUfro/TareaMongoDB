import {Router} from 'express';
import {createMessage,deleteMessage} from '../controller/message.controller.js';
const router = Router();

router.post('', createMessage);

router.delete('/:messageId', deleteMessage);


export default router;