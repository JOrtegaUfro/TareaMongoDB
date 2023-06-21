function createMessage(req, res){
    const userId = req.body.userId;
    const message = req.body.message;
    const mensaje = {
        "userId": userId,
        "message": message
    };
    return res.send({mensaje});
}


function deleteMessage(req, res){
    return res.status(200).json({todo: "ok"});
}

export {createMessage, deleteMessage}