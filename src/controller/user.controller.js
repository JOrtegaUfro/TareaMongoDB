import User from "../models/user.model.js"


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


function loginUser(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const user = {
        "email": email,
        "password": password
    };
    return res.send({user});
}

function listarUsers(req, res){
    res.send('usuarios');
}

function mensajeUsuario(req,res){
    return res.status(200).json({todo: "ok"});
}

export {createUser, loginUser, listarUsers, mensajeUsuario}