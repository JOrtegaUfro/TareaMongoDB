import {Router} from 'express';

const router = Router();

router.post('', (req, res) => {
    const userId = req.body.userId;
    const message = req.body.message;
    const mensaje = {
        "userId": userId,
        "message": message
    };
    return res.send({mensaje});
});
router.get('/:messageId', (req, res) => {
    return res.status(200).json({todo: "ok"});
});


export default router;