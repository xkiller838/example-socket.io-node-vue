const usercontroller = {};

//Devuelve un arrays de usuarios y retorna el array
usercontroller.index  = async (req, res) =>{
  const usuarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 23 },
    { nombre: 'Pablo', edad: 30 }
  ];
  res.json(usuarios);  
};

//retorna la informacion que se envia al controlador
usercontroller.create  = async (req, res) =>{
  res.json(req.body);  
};


module.exports = usercontroller;