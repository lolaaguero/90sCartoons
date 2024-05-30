document.getElementById('btn-login').addEventListener("click", e => ingresar(e))
        const ingresar = (e) => {
            e.preventDefault();
            var email = document.getElementById('username').value;
            var password = document.getElementById('pass').value;
            if (email == 'estefany-44@hotmail.com' && password == '1a') {
                alert("login correctodf")
            }
            else {
                alert('Revise clave o correo')
            }
        }


function login() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;

    if(user == "soylolaaguero@gmail.com" && pass == "1234"){
        alert("inicio de sesión exitoso")
    } else {
        alert("Los datos ingresados son incorrectos")
    }
}