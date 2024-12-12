import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/utils/Form/Components';
import { AuthContext } from '../components/utils/AuthContextPrueba';
import "../components/utils/Form/Components";

function LoginRegister() {
    const { login, register } = useContext(AuthContext);
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loginError, setLoginError] = useState('');

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name && !signIn) formErrors.name = "Nombre es obligatorio";
        if (!formData.email) {
            formErrors.email = "Email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email no es válido";
        }
        if (!formData.password) formErrors.password = "Contraseña es obligatoria";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const newUser = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            };
            try {
                await register(newUser);
                setSuccessMessage("Registro exitoso. Ahora puedes iniciar sesión.");
                setFormData({ name: '', email: '', password: '' });
                toggle(true);
            } catch (error) {
                console.error("Error en el registro:", error);
                setErrors({ general: "Error en el servidor" });
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const user = {
                email: formData.email,
                password: formData.password,
            };
            try {
                const response = await login(user);
                if (response.status === 200) {
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
            <Components.Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "bold", marginBottom: "10rem", marginTop: "10rem", height: "70vh", width: "90vh" }}>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleRegister}>
                        <Components.Title>Crear Cuenta</Components.Title>
                        <Components.Input 
                            type='text' 
                            placeholder='Nombre' 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                        <Components.Input 
                            type='email' 
                            placeholder='Email' 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        <Components.Input 
                            type='password' 
                            placeholder='Contraseña' 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        <Components.Button type="submit">Registro</Components.Button>
                        {successMessage && <p className="text-green-500 text-xs">{successMessage}</p>}
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleLogin}>
                        <Components.Title>Iniciar Sesión</Components.Title>
                        <Components.Input 
                            type='email' 
                            placeholder='Email' 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        <Components.Input 
                            type='password' 
                            placeholder='Contraseña' 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
                        <Components.Button className="text-black" type="submit">Iniciar Sesión</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Bienvenido!</Components.Title>
                            <Components.Paragraph>
                                Para mantenerse en contacto con nosotros por favor inicie sesión en su cuenta
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Iniciar Sesión
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
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

export default LoginRegister;