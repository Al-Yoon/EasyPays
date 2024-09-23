// src/components/layout/Menus.js

export const REDESSOCIALES = [
  { name: "Nos puedes encontrar en" },
  { name: "Instagram y Linkedin" }
];

export const NAVEGACION = (isAuthenticated) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Nosotros", link: "/nosotros" },
    { name: "Servicios", link: "/#services" },
    { name: "Proyectos", link: "/myprojects" }
  ];

  if (isAuthenticated) {
    links.push({ name: "Perfil", link: "/userpanel" });
  }

  return links;
};

export const CONTACTANOS = [
  { name: "+54 15 47892537" },
  { name: "easypaysbusiness@gmail.com", link: "#" },
];