import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/utils/Form/Components';
import { AuthContext } from '../components/utils/AuthContextPrueba';
import "../components/utils/Form/Components";
import login from "../api/login.api";
import registerUser from "../api/register.api";

function LoginRegisterPrueba() {
    const [signin, toggle] = useState(true);
    const [formData, setFormData] = useState({ nombre: '', email: '', contrasenia: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.nombre && !signin) formErrors.nombre = "Nombre es obligatorio";
        if (!formData.email) {
            formErrors.email = "Email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email no es válido";
        }
        if (!formData.contrasenia) formErrors.contrasenia = "Contraseña es obligatoria";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await registerUser(formData);
                if (response.message === "User created successfully") {
                    setSuccessMessage("Registro exitoso. Ahora puedes iniciar sesión.");
                    setFormData({ nombre: '', email: '', contrasenia: '' });
                    toggle(true);
                } else {
                    setErrors({ email: "El email ya está registrado" });
                }
            } catch (error) {
                console.error("Error en el registro:", error);
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await login(formData.email, formData.contrasenia);
                if (response.status === 200) {
                    sessionStorage.setItem("access-token", response.token);
                    navigate('/userpanel');
                } else {
                    setLoginError("Email o contraseña incorrectos");
                }
            } catch (error) {
                console.error("Error en el login:", error);
                setLoginError("Error en el servidor");
            }
        }
    };

    return (
        <div className="flex flex-auto justify-center">
            <Components.Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "Montserrat", marginBottom: "10rem", marginTop: "10rem", height: "70vh", width: "90vh" }}>
                <Components.SignUpContainer signinIn={signin}>
                    <Components.Form onSubmit={handleRegister}>
                        <Components.Title>Crear Cuenta</Components.Title>
                        <Components.Input
                            type='text'
                            id='nombre'
                            placeholder='Ingrese su Nombre'
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        {errors.nombre && <p className="text-red-500 text-xs">{errors.nombre}</p>}
                        <Components.Input
                            type='email'
                            id='email'
                            placeholder='Ingrese su Email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        <Components.Input
                            type='password'
                            id='contrasenia'
                            placeholder='Ingrese una Contraseña'
                            name="contrasenia"
                            value={formData.contrasenia}
                            onChange={handleChange}
                            required
                        />
                        {errors.contrasenia && <p className="text-red-500 text-xs">{errors.contrasenia}</p>}
                        <Components.Button type="submit">Registro</Components.Button>
                        {successMessage && <p className="text-green-500 text-xs">{successMessage}</p>}
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signin}>
                    <Components.Form onSubmit={handleLogin}>
                        <Components.Title>Iniciar Sesión</Components.Title>
                        <Components.Input
                            type='email'
                            placeholder='Ingrese su Email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Components.Input
                            type='password'
                            placeholder='Ingrese su Contraseña'
                            name="contrasenia"
                            value={formData.contrasenia}
                            onChange={handleChange}
                        />
                        {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
                        <Components.Button className="text-black" type="submit">Iniciar Sesión</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
                <Components.OverlayContainer signinIn={signin}>
                    <Components.Overlay signinIn={signin}>
                        <Components.LeftOverlayPanel signinIn={signin}>
                            <Components.Title>Bienvenido!</Components.Title>
                            <Components.Paragraph>
                                Para mantenerse en contacto con nosotros por favor inicie sesión en su cuenta
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Iniciar Sesión
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signinIn={signin}>
                            <Components.Title>Bienvenido amigo!</Components.Title>
                            <Components.Paragraph>
                                Ingrese tus datos y comienza a utilizar la aplicación
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Registro
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    )
}

export default LoginRegisterPrueba;