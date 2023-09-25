import { Input, Button, Link } from "@nextui-org/react";
import {
  IconBrandFacebookFilled,
  IconEyeFilled,
  IconEyeOff,
  IconMailFilled,
} from "@tabler/icons-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { email, maxLength, minLength, object, string, Input as Inputvali } from "valibot";
import logo from "../../../img/icono00.png";
import React from "react";
import { supabaseClient } from "../../../supabase";


const PropsRegisterSchema = object({
  username: string("Tu usuario debe contener solo letras y numeros", [
    minLength(1, "Ingresa tu usuario"),
    minLength(6, "Tu usuario debe tener minimo 6 caracteres"),
    maxLength(18, "Tu usuario no debe tener mas de 18 caracteres"),
  ]),
  email: string("Tu correo debe ser example@example.com", [
    minLength(1, "Ingresa tu correo"),
    email("Por favor ingresa un correo valido"),
  ]),
  password: string("Tu contraseña debe contener solo letras y numeros", [
    minLength(1, "Ingresa tu contraseña"),
    minLength(6, "Tu contraseña debe tener minimo 6 caracteres"),
    maxLength(18, "Tu contraseña no debe tener mas de 18 caracteres"),
  ]),
  confirmpassword: string("Tu contraseña debe ser la misma", [
    minLength(1, "Confirma tu contraseña"),
    minLength(6, "Tu contraseña debe tener minimo 6 caracteres"),
    maxLength(18, "Tu contraseña no debe tener mas de 18 caracteres"),
  ]),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: valibotResolver(PropsRegisterSchema),
  });



  const [formData, setFormData] = React.useState({ //Identificador para actualizar los datos del objeto
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  })
  console.log(formData)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { //Especifica que data es un evento cambiante
    setFormData((prevFormData) => { //Saber la entrada antes de que se cambiara
      return {
        ...prevFormData, //Tendremos nuestro form anterior
        [event.target.name]: event.target.value//Cada vez que se haga un cambio debemos operar en un elemento en particular del objeto, en si reemplazamos todas las entradas
      }
    })
  }

  const onSubmit: SubmitHandler<Inputvali<typeof PropsRegisterSchema>> = async () => {
    try {
      const { data } = await supabaseClient.auth.signUp(
        {
          email: formData.email, //Obteniendo objetos del state
          password: formData.password,
          options: {
            data: {
              user_name: formData.username,
            }
          }
        }
      )
      alert('Porfavor revisa tu correo electronico para validar tu cuenta')
    } catch (error) {
      alert(error)
    }
  };




  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  return (
    <div className="flex flex-row justify-center my-24">
      <form onSubmit={handleSubmit(onSubmit as any)}>
        <div className="md:w-96 w-full">
          <section className="space-y-5 ">
            <Input
              errorMessage={errors.username?.message as string}
              validationState={errors.username ? "invalid" : "valid"}
              color={!isSubmitted ? "default" : "success"}
              isClearable
              type="text"
              label="Usuario"
              variant="bordered"
              placeholder="Ingresa tu usuario"
              onClear={() => console.log("input cleared")}
              {...register("username")}
              onChange={handleChange}
            />
            <Input
              errorMessage={errors.email?.message as string}
              validationState={errors.email ? "invalid" : "valid"}
              color={!isSubmitted ? "default" : "success"}
              isClearable
              label="Email"
              variant="bordered"
              placeholder="Ingresa tu correo"
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
            <Input
              errorMessage={errors.confirmpassword?.message as string}
              validationState={errors.confirmpassword ? "invalid" : "valid"}
              color={!isSubmitted ? "default" : "success"}
              label="Confirma tu contraseña"
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
              {...register("confirmpassword")}
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
              Registrarse
            </Button>
            <Link href="/login" underline="always" color="danger">
              ¿Ya tienes una cuenta?
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
    </div>
  );
};

export default Register;
