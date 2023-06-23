import User from "../models/user.model.js";
import Message from '../models/message.model.js';
import bcrypt from "bcrypt";


async function createUser(req, res){
const password = req.body.password;
const encryptedPassword = bcrypt.hashSync(password, 10);
 try{
    const createdUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword,
        dni: req.body.dni,
});
const users = await User.find().populate("name");
const matchUser = users.find(user => user.name === createdUser.name||createdUser.email === user.email||createdUser.dni === user.dni);
if(matchUser){
    return res.status(400).send({error : "Error falta campo o ya los datos ya fueron utilizados para crear un usuario"});
}else{
    await createdUser.save();
    return res.status(201).send({response : createdUser});
}

}catch(error){
    console.log(error);
    return res.status(500).send({error});
}
}


async function loginUser(req, res){
    const name= req.body.name;
    const password = req.body.password;
    const users = await User.find().populate("name");
    try{
    const matchUser = users.find(user => user.name === name);

    if(matchUser){
        const isMatch = await bcrypt.compare(password, matchUser.password);
        if(isMatch){
        return res.status(200).send({matchUser});
        }else{
            return res.status(401).send({error : "Usuario o contraseña incorrectos"});
        }
    }else{
        return res.status(401).send({error : "Usuario o contraseña incorrectos"});
    }
}catch(error){
    return res.status(500).send({error});
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