import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/Form/Components';
import { AuthContext } from "../components/Body/AuthContext";

function LoginRegister() {
    const [signIn, toggle] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleRegister = () => {
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert("Usuario registrado exitosamente");
        setName('');
        setEmail('');
        setPassword('');
        toggle(true);
    };

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === loginEmail && user.password === loginPassword) {
            login(user);
            navigate('/userpanel');
        } else {
            alert("Correo electrónico o contraseña incorrectos");
        }
    };

    return (
        <div className="flex flex-auto justify-center">
            <Components.Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "Montserrat", marginBottom: "10rem", marginTop: "10rem", height: "70vh" }}>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Crear Cuenta</Components.Title>
                        <Components.Input type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Components.Input type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Components.Button onClick={handleRegister}>Registro</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Iniciar Sesión</Components.Title>
                        <Components.Input type='email' placeholder='Email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                        <Components.Input type='password' placeholder='Contraseña' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        <Components.Anchor href='#'>¿Olvidaste tu contraseña?</Components.Anchor>
                        <Components.Button onClick={handleLogin}>Iniciar Sesión</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>¡Bienvenido!</Components.Title>
                            <Components.Paragraph>
                                Para mantenerse en contacto con nosotros por favor inicie sesión en su cuenta
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Iniciar Sesión
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>¡Bienvenido amigo!</Components.Title>
                            <Components.Paragraph>
                                Ingrese tus datos y comience a utilizar la aplicación
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Registro
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
    );
}

export default LoginRegister;