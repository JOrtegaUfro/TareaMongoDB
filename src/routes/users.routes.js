import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('usuarios');
});
router.get('/:IdUser/messages', (req, res) => {
    return res.status(200).json({todo: "ok"});
});


export default router;