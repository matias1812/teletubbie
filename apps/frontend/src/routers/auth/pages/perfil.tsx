import { Avatar, Button, Divider, Input, Tab, Tabs } from "@nextui-org/react";
import { IconLogout, IconPhotoPlus } from "@tabler/icons-react";
import { useLocation } from "wouter";
import CardPropiedades from "../../../components/card";
import { AuthContext } from "../../../context/Auth";
import { supabaseClient } from "../../../supabase";
import Posting from "../login/Publications/Post";
import { MisPublicaciones } from "./perfil/mispublicaciones";

const DataUser = [
  {
    name: "Marco Antonio",
    apellidos: "Vega Ortiz",
    ubicacion: "Chile, La Serena.",
    codigopostal: "1700000",
  },
];

const ActualizarPerfil = [
  {
    name: "Nombres",
    type: "text",
    placeholder: "Ej: Marco antonio",
  },
  {
    name: "Apellidos",
    type: "text",
    placeholder: "Ej: Vega Ortiz",
  },
  {
    name: "Nombre de usuario",
    type: "text",
    placeholder: "Ej: Teblelin",
  },
  {
    name: "Mail",
    type: "email",
    placeholder: "Ej: marco.antoni@gmail.com",
  },
  {
    name: "Contrasena",
    type: "password",
    placeholder: "Usa min 1 mayuscula y 4 digitos ",
  },
  {
    name: "Ubicacion",
    type: "text",
    placeholder: "Ej: Pais, Ciudad, Calle, #1234 ",
  },
  {
    name: "Codigo Postal",
    type: "number",
    placeholder: "Ej: 33101",
  },
];

export default function UsuarioPerfil() {
  const { user } = AuthContext();
  const [, setLocation] = useLocation();

  const rows = 1;
  const cols = 1;

  return (
    <>
      <div className="container">
        <div className="flex gap-[2rem]">
          <h1 className="font-bold text-2xl">Mi Perfil</h1>
        </div>
        <div className="flex flex-row gap-4 justify-between items-center pt-[1rem]">
          <div className="flex justify-start items-start">
            <Avatar
              isBordered
              color="danger"
              className="w-20 h-20"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
            <div className="flex flex-col pl-[2rem] ">
              <h1>Bienvenido {user?.user.user_metadata.user_name}</h1>
              <p>Correo: {user?.user.email}</p>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <Button color="primary">
              <IconPhotoPlus />
              <h1>Nueva foto de perfil</h1>
            </Button>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <Tabs variant="underlined" aria-label="Tabs variants">
              <Tab title="Info">
                {DataUser.map((info) => {
                  return (
                    <div className="flex flex-col text-start items-start justify-start">
                      <ul className="font-semibold text-lg" key={info.name}>
                        <li>Nombres: {info.name}</li>
                        <li>Apellidos: {info.apellidos}</li>
                        <li>Ubicacion: {info.ubicacion}</li>
                        <li>Codigo postal: {info.codigopostal}</li>
                      </ul>
                    </div>
                  );
                })}
                <MisPublicaciones />
              </Tab>
              <Tab title="Editar perfil">
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {ActualizarPerfil.map((dato) => {
                    return (
                      <div
                        className="flex flex-row justify-center gap-4"
                        key={dato.name}
                      >
                        <Input
                          type={dato.type}
                          label={dato.name}
                          placeholder={dato.placeholder}
                          labelPlacement="outside"
                          className="w-[25rem]"
                        />
                      </div>
                    );
                  })}
                  <Button
                    color="primary"
                    variant="bordered"
                    className="m-2 mt-7 w-[25rem]"
                  >
                    Actualizar
                  </Button>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
