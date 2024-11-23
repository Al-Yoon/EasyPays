import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/utils/Form/Components';
import { AuthContext } from '../components/utils/AuthContext';
import "../components/utils/Form/Components";
import loginApi from "../api/login.api";

function LoginRegisterPrueba() {
    const { login, register } = useContext(AuthContext);
    const navigate = useNavigate();

    const [signIn, toggle] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    //Manejar los estados
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[name,setName] = useState('');
    const[error, setError] = useState(null);

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loginError, setLoginError] = useState('');

    //Los handlers
    const handleNameChange = (e) =>{
        setEmail(e.target.value); //lo pisa con el nuevo valor
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value); //lo pisa con el nuevo valor
    }

    const handlePasswordChange = (e) =>{
        setEmail(e.target.value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!email && !signIn) {
            email = "Email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            email = "Email no es válido";
        }
        if (!password)
            password = "Contraseña es obligatoria";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    //llamada a endpoint de login
    const handleSubmit =async (e) =>{
        e.preventDefault();
        //llamada a endpoint de login
        let response = await login(email,password);
        console.log(response);
        console.log("Token guardado en SessionStorage");
        if(response.status === 200){
            sessionStorage.setItem("access-token",response.token); //guardamos en el sessionStorage el token de ese user- key:value
            navigate("/userpanel");
        } else{
            setError(response.message);
        }
    }
    
    return (
        <div className="flex flex-auto justify-center">
            <Components.Container style={{display:"flex", flexWrap:"wrap", justifycontent: "center", 
                                            alignitems: "center", flexdirection: "column", fontfamily: "Montserrat", marginBottom: "10rem", marginTop: "10rem", height:"70vh", width:"90vh"}}>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleSubmit}> {/* cdo se hace el submit se dispara el registro */}
                        <Components.Title>Crear Cuenta</Components.Title>
                        <Components.Input 
                            type='text'
                            id='nombre' 
                            placeholder='Ingrese su Nombre' 
                            name="name" 
                            value={formData.name} 
                            onChange={handleNameChange} 
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                        <Components.Input 
                            type='email'
                            id='email' 
                            placeholder='Ingrese su Email' 
                            name="email" 
                            value={email} 
                            onChange={handleEmailChange} //valor controlado
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        <Components.Input 
                            type='password' 
                            id = 'contrasenia'
                            placeholder='Ingrese una Contraseña' 
                            name="contrasenia" 
                            value={password} 
                            onChange={handlePasswordChange} //valor controlado
                            required
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        <Components.Button type="submit">Registro</Components.Button>
                        {successMessage && <p className="text-green-500 text-xs">{successMessage}</p>}
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleSubmit}>  {/* cdo se hace el submit se dispara el login */}
                        <Components.Title>Iniciar Sesión</Components.Title>
                        <Components.Input 
                            type='email' 
                            placeholder='Ingrese su Email' 
                            name="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                        <Components.Input 
                            type='password' 
                            placeholder='xxxxxxxx' 
                            name="contrasenia" 
                            value={password} 
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

export default LoginRegisterPrueba;