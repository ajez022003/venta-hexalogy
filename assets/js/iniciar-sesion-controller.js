const iniciarSecion =async()=>{
    const paylod = {
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contrasena').value,
    };
    console.log("Login", paylod);
    fetch('http://:2000localhost/usuarios',{
        headers:{'Content-type': 'aplication/json'},
        body: JSON.stringify(paylod),
        method: 'POST'
    });
    const usuario= await result.json();
    if(!usuario|| !usuario.status){
        alert("usuario, contraseña");
    }
    console.log(usuario);
}