import { NavBar } from "./tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Inicio", url: "/" },
    { name: "Sobre Mí", url: "/about" },
    { name: "Proyectos", url: "/project" },
    { name: "Resume", url: "/resume" },
  ];

  return <NavBar items={navItems} />;
}
