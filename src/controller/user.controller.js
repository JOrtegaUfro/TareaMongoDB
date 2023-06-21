function createUser(req, res){
    const name = req.body.name;
    const email= req.body.email;
    const dni = req.body.dni;
    const password = req.body.password;
    const user = {
        "nombre": name,
        "email": email,
        "dni": dni,
        "password": password
    };
    return res.send({user});
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