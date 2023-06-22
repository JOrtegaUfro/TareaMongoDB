import Message from '../models/message.model.js';
import User from "../models/user.model.js";
import mongoose from 'mongoose';


async function createMessage(req, res){

    const { userId } = req.body;
    const users = await User.find().populate("name");
    //no estoy seguro de si es la mejor manera de validar una id guardada 
    const userIdObject = new mongoose.Types.ObjectId(userId);
    const matchUser = users.find(user => user._id.equals(userIdObject));


    try{
    if(matchUser){
        const createdMessage = new Message({
            userId: req.body.userId,
            message: req.body.message,
        }
        );
        await createdMessage.save();
        return res.status(201).send({response : createdMessage});
    }else{
        return res.status(404).send({error: "User not found"});
    }
}catch(error){
    console.log(error);
    return res.status(500).send({error});
}
}


async function deleteMessage(req, res){
    const mensajeId = req.params.messageId;

	const mensaje = await Message.findById(mensajeId);

	if (!mensaje){
		return res.status(404).send({error: "No encontrado"})
	}
	//await mensaje.delete();
	return res.status(204).send();
}

export {createMessage, deleteMessage}