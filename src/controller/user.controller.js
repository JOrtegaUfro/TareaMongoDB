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

export {createUser}