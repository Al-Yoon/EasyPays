import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/utils/Form/Components';
import { AuthContext } from '../components/utils/AuthContext';
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

    const handleRegister = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.some(user => user.email === formData.email);

            if (userExists) {
                setErrors({ email: "El email ya está registrado" });
            } else {
                const newUser = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                };
                register(newUser);
                setSuccessMessage("Registro exitoso. Ahora puedes iniciar sesión.");
                setFormData({ name: '', email: '', password: '' });
                toggle(true);
                navigate('/login'); 
            }
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const success = login(formData.email, formData.password);
            if (success) {
                navigate('/userpanel'); 
            } else {
                setLoginError("Email o contraseña incorrectos");
            }
        }
    };

    return (
        <div className="flex flex-auto justify-center">
            <Components.Container style={{display:"flex", flexWrap:"wrap", justifycontent: "center", 
                                            alignitems: "center", flexdirection: "column", fontfamily: "bold", marginBottom: "10rem", marginTop: "10rem", height:"70vh", width:"90vh"}}>

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
                        <Components.Input 
                            type='password' 
                            placeholder='Contraseña' 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                        />
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