import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarBrand,
} from "@nextui-org/react";
import { IconChristmasTree, IconSend } from "@tabler/icons-react";
import { ThemeSwitcher } from "./theme_button";
import logo from "../img/icono00.png";
import { useLocation } from "wouter";
import React from "react";

export default function NavbarOffLogin() {
  const [, setLocation] = useLocation(); //_ para especificar que no se utiliza
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Destinos", route: "/destination" },
    { name: "Contacto", route: "/contact" },
    { name: "Perfil", route: "/perfil" },
    { name: "Iniciar Sesión", route: "/login" },
    { name: "Registro", route: "/register" },
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="hover:cursor-pointer" shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <div className="max-w-[5rem]" onClick={() => setLocation("/")}>
            <img src={logo}/>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="options hidden lg:flex gap-2" justify="center">
        <NavbarItem>
          <Link color="foreground" onClick={() => setLocation("/destination")}>
            Destinos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={() => setLocation("/contact")}>
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={() => setLocation("/reservacion")}>
            Reservar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={() => setLocation("/postvivienda")}>
            Crear publicación
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={() => setLocation("/posting")}>
            Publicaciónes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem className="hidden lg:flex  items-center gap-2">
          <IconChristmasTree className=" w-7 h-7" />
          <Button
            onClick={() => setLocation("/login")}
            className="btn1"
            color="danger"
            variant="bordered"
            startContent=""
          >
            Iniciar Sesión
          </Button>
          <IconSend className=" w-6 h-6" />
          <Button
            onClick={() => setLocation("/register")}
            className="btn1"
            color="danger"
            variant="bordered"
            startContent=""
          >
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index > 2 ? "primary" : "foreground"}
              className="w-full"
              onClick={() => {
                setLocation(item.route);
              }}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
