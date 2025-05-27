const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

window.onload = function () {
    if (localStorage.getItem('logueado') === 'true') {
        document.getElementById('login-area').style.display = 'none';
        document.getElementById('user-area').style.display = 'block';
    }
};

// --------------------- Funciones para manejar usuarios ---------------------

function obtenerUsuarios() {
    const usuariosJSON = localStorage.getItem('usuariosRegistrados');
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}

function guardarUsuarios(usuarios) {
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
}

// --------------------- Login ---------------------

const loginForm = document.querySelector('#login-form form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = loginForm.querySelector('input[type="text"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    // Verifica también si es admin
    if (usuario === 'admin' && password === '1234') {
        window.location.href = 'INDEX.html';
        return;
    }

    const usuarios = obtenerUsuarios();
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.password === password);

    if (usuarioValido) {
        localStorage.setItem('logueado', 'true');
        window.location.href = 'INDEX.html'; // Redirige a la página principal
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

// --------------------- Registro ---------------------

const registerForm = document.querySelector('#register-form form');

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuarioNuevo = registerForm.querySelector('input[type="text"]').value.trim();
    const passwordNuevo = registerForm.querySelector('input[type="password"]').value.trim();

    if (!usuarioNuevo || !passwordNuevo) {
        alert('Por favor completa todos los campos');
        return;
    }

    const usuarios = obtenerUsuarios();
    const yaExiste = usuarios.some(u => u.usuario === usuarioNuevo);

    if (yaExiste) {
        alert('El usuario ya existe. Intenta con otro nombre.');
        return;
    }

    usuarios.push({ usuario: usuarioNuevo, password: passwordNuevo });
    guardarUsuarios(usuarios);

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    registerForm.reset();
    container.classList.remove('active'); // Vuelve al login automáticamente
});

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('#login-form form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Ejemplo simple de validación (puedes usar localStorage si ya registraste usuarios antes)
    if (username && password) {
      localStorage.setItem('logueado', 'true');
      localStorage.setItem('usuario', username);
      window.location.href = 'INDEX.html'; // Asegúrate que este sea el nombre de tu página principal
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });

  const registerForm = document.querySelector('#register-form form');

  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    // Puedes almacenar datos del nuevo usuario si lo deseas
    localStorage.setItem('usuarioRegistrado', username);
    localStorage.setItem('emailRegistrado', email);
    localStorage.setItem('passwordRegistrado', password);

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    document.querySelector('.container').classList.remove('active'); // Volver al login
  });

  // Botones para cambiar entre login y registro
  const registerBtn = document.querySelector('.register-btn');
  const loginBtn = document.querySelector('.login-btn');

  registerBtn.addEventListener('click', () => {
    document.querySelector('.container').classList.add('active');
  });

  loginBtn.addEventListener('click', () => {
    document.querySelector('.container').classList.remove('active');
  });
});

