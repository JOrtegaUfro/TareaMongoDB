import User from "../models/user.model.js";
import Message from '../models/message.model.js';


async function createUser(req, res){
 try{
    const createdUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        dni: req.body.dni,
});
await createdUser.save();
return res.status(201).send({response : createdUser});
}catch(error){
    console.log(error);
    return res.status(500).send({error});
}
}


async function loginUser(req, res){
    const { name, password } = req.body;
    const users = await User.find().populate("name");
    const matchUser = users.find(user => user.name === name && user.password === password);

    if(matchUser){
        return res.status(200).send({todo : "ok"});
    }else{
        return res.status(401).send({error : "Usuario o contraseña incorrectos"});
    }
}

async function listarUsers(req, res){
    try{
    const users = await User.find().populate("name");
	return res.status(200).send({ users });
    }catch(error){
            console.log(error);
            return res.status(500).send({error});
    }
}

async function mensajeUsuario(req,res){
    const userId = req.params.IdUser;
    const mensajes = await Message.find().populate("userId");
    const matchMensajes= mensajes.filter(mensaje => mensaje.userId === userId);
    try{
    if(matchMensajes.length>0){
        return res.status(200).send({matchMensajes});
    }else{
        return res.status(404).send({error : "No hay mensajes"});
    }
}catch(error){
    return res.status(500).send({error});
}
    
}

export {createUser, loginUser, listarUsers, mensajeUsuario}