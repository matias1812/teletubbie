import { valibotResolver } from "@hookform/resolvers/valibot";
import { Button, Input, Link } from "@nextui-org/react";
import {
  IconBrandFacebookFilled,
  IconEyeFilled,
  IconEyeOff,
  IconMailFilled,
} from "@tabler/icons-react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  object,
  string,
  minLength,
  maxLength,
  Input as Inputvali,
  email,
} from "valibot";
import React from "react";
import logo from "../../../img/icono00.png";
import { supabaseClient } from "../../../supabase";
import { useLocation } from "wouter";
import { AuthContext } from "../../../context/Auth";

const PropsLogin = object({
  email: string("Tu correo debe ser example@example.com", [
    minLength(1, "Ingresa tu correo"),
    email("Por favor ingresa un correo valido"),
  ]),
  password: string("Tu contraseña debe contener solo letras y numeros", [
    minLength(1, "Ingresa tu contraseña"),
    minLength(6, "Tu contraseña debe tener minimo 6 caracteres"),
    maxLength(18, "Tu contraseña no debe tener mas de 18 caracteres"),
  ]),
});

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: valibotResolver(PropsLogin),
  });

  const [formData, setFormData] = React.useState({
    //Identificador para actualizar los datos del objeto
    email: "",
    password: "",
  });
  console.log(formData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Especifica que data es un evento cambiante
    setFormData((prevFormData) => {
      //Saber la entrada antes de que se cambiara
      return {
        ...prevFormData, //Tendremos nuestro form anterior
        [event.target.name]: event.target.value, //Cada vez que se haga un cambio debemos operar en un elemento en particular del objeto, en si reemplazamos todas las entradas
      };
    });
  };

  const onSubmit: SubmitHandler<Inputvali<typeof PropsLogin>> = async () => {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      setUser(); //Estado para actualizar el user
      setLocation("/perfil");
    } catch (error) {
      alert(error);
    }
  };

  const { setUser } = AuthContext();

  const [, setLocation] = useLocation();

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="flex flex-row justify-center  my-44">
      <form onSubmit={handleSubmit(onSubmit as any)}>
        <div className="md:w-96 w-full">
          <section className="space-y-5">
            <Input
              errorMessage={errors.email?.message as string}
              validationState={errors.email ? "invalid" : "valid"}
              color={!isSubmitted ? "default" : "success"}
              isClearable
              label="Email"
              variant="bordered"
              placeholder="Ingresa tu usuario"
              onClear={() => console.log("input cleared")}
              {...register("email")}
              onChange={handleChange}
            />

            <Input
              errorMessage={errors.password?.message as string}
              validationState={errors.password ? "invalid" : "valid"}
              color={!isSubmitted ? "default" : "success"}
              label="Contraseña"
              variant="bordered"
              placeholder="Ingresa tu contraseña"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <IconEyeFilled className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <IconEyeOff className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              {...register("password")}
              onChange={handleChange}
            />
          </section>
        </div>
        <section>
          <div className="flex flex-col items-center space-y-5 pt-6">
            <Button
              type="submit"
              className="bg-[#D41790] font-bold text-white md:text-lg  "
            >
              Iniciar Sesión
            </Button>
            <Link href="/register" underline="always" color="danger">
              ¿No tienes una cuenta?
            </Link>
          </div>
          <div className="flex flex-row justify-center text-[#D41790] pt-5 gap-5 hover:cursor-pointer">
            <IconMailFilled href="#" />
            <IconBrandFacebookFilled href="#" />
          </div>
        </section>
      </form>
      <div className="h-96 w-96 pb-96 -mt-[4.5rem] lg:block hidden">
        <img src={logo} />
      </div>
    </main>
  );
};

export default Login;
