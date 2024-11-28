import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/utils/Form/Components';
import { AuthContext } from '../components/utils/AuthContextPrueba';
import "../components/utils/Form/Components";
import login from "../api/login.api";

function LoginRegisterPrueba() {
    const { register } = useContext(AuthContext);

    const [signIn, toggle] = useState(true);
    const [formData, setFormData] = useState({ nombre: '', email: '', contrasenia: '' });
    //Manejar los estados
    
    const[name,setName] = useState('');
    const[error, setError] = useState(null);

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.nombre && !signIn) formErrors.nombre = "Nombre es obligatorio";
        if (!formData.email) {
            formErrors.email = "Email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email no es válido";
        }
        if (!formData.contrasenia) formErrors.contrasenia = "Contraseña es obligatoria";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    //llamada a endpoint de login
    const Login =() =>{
        const[email,setEmail] = useState('');
        const[password,setPassword] = useState('');
        const { loginSuccess } = useContext(AuthContext);
        const navigate = useNavigate();
        const handleLogin = async(e) =>{
            e.preventDefault();
            let response = await login(email,password);
            console.log(response);
            console.log("Token guardado en SessionStorage");
            if(response.status === 200){
                const token = response.token;
                sessionStorage.setItem("access-token",response.token); //guardamos en el sessionStorage el token de ese user- key:value
                loginSuccess(token);
                navigate("/userpanel");
            } else{
                setError(response.message);
            }
        }
        }

        const Register =()=>{
            const {register,login} = useContext(AuthContext);
            const [name, setName] = useState("");
            const [email, setMail] = useState("");
            const [password, setPass] = useState("");
        
            const navigate = useNavigate(); 
        
            const handleRegister = () => {
                if(validateForm){
                    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
                    const userExists = existingUsers.some(user => user.email === email);
                    if(userExists){
                        console.log("User already exists")
                    } else{
                        const newUser = {
                            nombre: name,
                            email: email,
                            contrasenia: password,
                        };
                        registrar(newUser);
                        /*register(newUser);
                        login(mail,pass);
                        navigate("/board");*/
                    }
                }else{
                    setOpenError(true);
                }
            };


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
}}

export default LoginRegisterPrueba;