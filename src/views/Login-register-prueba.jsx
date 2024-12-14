import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "../components/utils/Form/Components";
import { AuthContext } from "../components/utils/AuthContextPrueba";
import login from "../api/login.api";
import registerUser from "../api/register.api";
import jwtDecode from "jwt-decode";

function LoginRegisterPrueba() {
  const [signin, toggle] = useState(true); // Alterna entre Login y Registro
  const [formData, setFormData] = useState({ nombre: "", email: "", contrasenia: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const { loginSuccess } = useContext(AuthContext);
  const navigate = useNavigate();

  // Maneja el cambio de datos en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validación del formulario
  const validateForm = () => {
    let formErrors = {};
    if (!formData.nombre && !signin) formErrors.nombre = "El nombre es obligatorio";
    if (!formData.email) {
      formErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "El email no es válido";
    }
    if (!formData.contrasenia) formErrors.contrasenia = "La contraseña es obligatoria";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await login(formData.email, formData.contrasenia);
        if (response.status === 200) {
          const { token } = response.data;
          console.log("Token recibido:", token);

          // Decodifica el token para asegurarte de que está bien formado
          try {
            const decodedToken = jwtDecode(token); // Decodificar el token JWT
            console.log("Token decodificado:", decodedToken); // Verificar el contenido del token

            sessionStorage.setItem("access-token", token);

            // Llama a la API para obtener los datos del usuario
            const userResponse = await fetch("http://localhost:8080/api/users/me", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });

            if (userResponse.ok) {
              const userData = await userResponse.json();
              loginSuccess(token, userData);
              navigate("/userpanel");
            } else {
              throw new Error("Error al obtener los datos del usuario.");
            }
          } catch (error) {
            console.error("Error al decodificar el token:", error);
            setLoginError("Token inválido. Intenta de nuevo.");
          }
        } else {
          setLoginError("Usuario o contraseña incorrectos");
        }
      } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        setLoginError("Error al iniciar sesión. Inténtalo de nuevo.");
      }
    }
  };
  
  // Maneja el registro de usuario
  const handleRegister = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Limpiar mensajes previos

    if (validateForm()) {
      try {
        const response = await registerUser({
          nombre: formData.nombre,
          email: formData.email,
          contrasenia: formData.contrasenia, // Asegúrate que coincida con el backend
        });

        if (response.status === 200) {
          setSuccessMessage("Usuario registrado con éxito. Ahora puedes iniciar sesión.");
          toggle(true); // Cambiar a modo de inicio de sesión
        } else {
          setErrors({ general: "Error al registrar el usuario. Inténtalo de nuevo." });
        }
      } catch (error) {
        console.error("Error durante el registro:", error);
        setErrors({ general: "Error al registrar el usuario. Inténtalo de nuevo." });
      }
    }
  };

  return (
    <div className="flex flex-auto justify-center">
      <Components.Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Montserrat",
          marginBottom: "10rem",
          marginTop: "10rem",
          height: "70vh",
          width: "90vh",
        }}
      >
        {/* Registro */}
        <Components.SignUpContainer signinIn={signin}>
          <Components.Form onSubmit={handleRegister}>
            <Components.Title>Crear Cuenta</Components.Title>
            <Components.Input
              type="text"
              placeholder="Ingrese su Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <p className="text-red-500 text-xs">{errors.nombre}</p>}
            <Components.Input
              type="email"
              placeholder="Ingrese su Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            <Components.Input
              type="password"
              placeholder="Ingrese una Contraseña"
              name="contrasenia"
              value={formData.contrasenia}
              onChange={handleChange}
            />
            {errors.contrasenia && <p className="text-red-500 text-xs">{errors.contrasenia}</p>}
            <Components.Button type="submit">Registro</Components.Button>
            {successMessage && <p className="text-green-500 text-xs">{successMessage}</p>}
          </Components.Form>
        </Components.SignUpContainer>

        {/* Inicio de Sesión */}
        <Components.SignInContainer signinIn={signin}>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>Iniciar Sesión</Components.Title>
            <Components.Input
              type="email"
              placeholder="Ingrese su Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Components.Input
              type="password"
              placeholder="Ingrese su Contraseña"
              name="contrasenia"
              value={formData.contrasenia}
              onChange={handleChange}
            />
            {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
            <Components.Button type="submit">Iniciar Sesión</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        {/* Alternancia entre Registro y Login */}
        <Components.OverlayContainer signinIn={signin}>
          <Components.Overlay signinIn={signin}>
            <Components.LeftOverlayPanel signinIn={signin}>
              <Components.Title>Bienvenido!</Components.Title>
              <Components.Paragraph>
                Para mantenerse en contacto con nosotros, inicie sesión en su cuenta.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>Iniciar Sesión</Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signinIn={signin}>
              <Components.Title>Hola, amigo!</Components.Title>
              <Components.Paragraph>
                Ingresa tus datos y comienza a utilizar la aplicación.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>Registro</Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default LoginRegisterPrueba;
