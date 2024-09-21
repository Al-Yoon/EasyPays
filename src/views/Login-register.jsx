import React from "react";
import * as Components from '../components/Form/Components';
import "../components/Form/Components";
import { Hidden } from "@mui/material";

function LoginRegister() {
    const [signIn, toggle] = React.useState(true);
    return(
    <div className="flex flex-auto justify-center">
        <Components.Container style={{display:"flex", flexWrap:"wrap", justifycontent: "center", alignitems: "center", flexdirection: "column", fontfamily: "Montserrat", marginBottom: "10rem", marginTop: "10rem", height:"70vh"}}>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Crar Cuenta</Components.Title>
                    <Components.Input type='text' placeholder='Nombre' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Contraseña' />
                <Components.Button>Rergistro</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Iniciar Sesión</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Contraseña' />
                    <Components.Anchor href='#'>Olvidaste tu contraseña?</Components.Anchor>
                    <Components.Button className="text-black">Iniciar Sesión</Components.Button>
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