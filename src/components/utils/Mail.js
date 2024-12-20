const { Resend } = require('resend');

const resend = new Resend("re_3xSY7Nd5_3TBNc8WLwfm9pDwFdsmPTgG1");

export const sendMail = async (email, ) => {
  const{data, error} =await resend.emails.send({
    from: 'easypays@gmail.com>',
    to: email,
    subject: "¡Bienvenido a EasyPays!",
    html: "Hola, te damos la bienvenida a EasyPays, tu nueva forma de pagar tus servicios. Para comenzar a disfrutar de nuestros servicios, por favor, haz click en el siguiente enlace: <a href='http://localhost:3000/login'>Iniciar Sesión</a>. Creemos que tenienes un pago pendiente",
});

if (error) {
  return console.error({ error });
}

console.log({ data });
};