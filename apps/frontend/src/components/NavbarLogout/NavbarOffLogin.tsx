import {
	Avatar,
	AvatarIcon,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import {
	IconChecklist,
	IconChristmasTree,
	IconHomeEdit,
	IconLogout,
	IconPencilPlus,
	IconSend,
	IconUser,
} from "@tabler/icons-react";
import React from "react";
import { useLocation } from "wouter";
import { AuthContext } from "../../context/Auth";
import logo from "../../img/icono00.png";
import { supabaseClient } from "../../supabase";
import { ThemeSwitcher } from "../theme_button";

export default function NavbarOffLogin() {
	const [, setLocation] = useLocation(); //_ para especificar que no se utiliza
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const { user, setUser } = AuthContext();

	const menuItems = [
		{ name: "Hoteles", route: "/hoteles" },
		{ name: "Contacto", route: "/contact" },
		{ name: "Iniciar Sesión", route: "/login" },
		{ name: "Registrarse", route: "/register" },
	];

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut(); //Removemos el storage del token para el logout

		if (!error) {
			setUser();
			setLocation("/"); //De ahi lo retornamos al home-page
		}
	};

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			className="hover:cursor-pointer "
			shouldHideOnScroll
		>
			<NavbarContent>
				<NavbarBrand>
					<div className="max-w-[5rem]" onClick={() => setLocation("/")}>
						<img src={logo} />
					</div>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="options hidden lg:flex gap-2 self-start pr-[12rem]">
				<NavbarItem>
					<Link color="foreground" onClick={() => setLocation("/")}>
						Hogar
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" onClick={() => setLocation("/hotels")}>
						Hoteles
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" onClick={() => setLocation("/contact")}>
						Contacto
					</Link>
				</NavbarItem>
				<NavbarItem>
					<ThemeSwitcher />
				</NavbarItem>
			</NavbarContent>

			{user ? (
				<>
					<Dropdown>
						<DropdownTrigger>
							<Button className="bg-transparent">
								<Avatar
									icon={<AvatarIcon />}
									classNames={{
										base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
										icon: "text-black/80",
									}}
								/>
							</Button>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem
								description="Mira tu perfil"
								startContent={<IconUser />}
								onClick={() => setLocation("/perfil")}
							>
								{user?.user.user_metadata.user_name}
							</DropdownItem>

							<DropdownItem
								description="¡Haz tu primera publicación!"
								startContent={<IconPencilPlus />}
								onClick={() => setLocation("/postvivienda")}
							>
								Crear publicación
							</DropdownItem>
							<DropdownItem
								showDivider
								description="Estas son tus reservas"
								startContent={<IconHomeEdit />}
								onClick={() => setLocation("/misreservaciones")}
							>
								Mis reservas
							</DropdownItem>
							<DropdownItem
								className="text-danger"
								color="danger"
								startContent={<IconLogout />}
								onClick={handleLogout}
							>
								Cerrar sesión
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</>
			) : (
				<>
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
					<NavbarContent justify="end" className="lg:hidden">
						<NavbarMenuToggle
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						/>
					</NavbarContent>
					<NavbarMenu>
						{menuItems.map((item, index) => (
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									color={index > 1 ? "primary" : "foreground"}
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
				</>
			)}
		</Navbar>
	);
}
