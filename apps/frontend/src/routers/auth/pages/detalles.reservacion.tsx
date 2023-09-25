import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  Button,
  Chip,
  Divider,
  Image,
  Input,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { IconHeart, IconShare, IconStar } from "@tabler/icons-react";
import { useCallback, useEffect, useId, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useHuespedesStore } from "../../../context/getCounter";

import {
  Input as Inputvali,
  date,
  maxLength,
  maxValue,
  minLength,
  minValue,
  number,
  object,
  string,
} from "valibot";
import { useLocation } from "wouter";
import Huespedes from "../../../components/huespedes.counter";
import { AuthContext } from "../../../context/Auth";
import { useFetchId } from "../../../hooks/Customs/useFetchId";
import { imageURL, supabaseClient } from "../../../supabase";
import { Error404 } from "./404";

const ReservaSchema = object({
  fecha_inicio: date(undefined, []),
  fecha_final: date(undefined, []),
});

const defaultValues = {
  fecha_inicio: undefined,
  fecha_final: undefined,
};

const tarifa = 0.1;

const defaulValuesDate = (() => {
  const date = new Date();
  const getFullYear = () => date.getFullYear();
  const getMonth = () => date.getMonth();
  const getDay = () => date.getDate();
  return {
    fecha_inicio: `${getFullYear()}-0${getMonth()}-${getDay()}`,
    fecha_final: `${getFullYear()}-0${getMonth()}-${getDay() + 2}`,
  };
})();

export default function Reservar({ id }) {
  const { counter } = useHuespedesStore();
  const [, setLocation] = useLocation();

  const [total, setTotal] = useState({
    noches: null,
    total: null,
    tarifaReal: null,
    precioTotalNoches: null,
  });
  const { isLogged, user } = AuthContext();
  const myCard = useFetchId(id);

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(ReservaSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const Total = useCallback(() => {
    const fechaIngreso = getValues("fecha_inicio");
    const fechaSalida = getValues("fecha_final");
    const tiempoDeEstadia = fechaSalida - fechaIngreso;
    const noches = tiempoDeEstadia / (1000 * 60 * 60 * 24);
    const precioTotalNoches = myCard.precio * noches;
    const tarifaReal = precioTotalNoches * tarifa;
    const total = precioTotalNoches + tarifaReal;
    setTotal({ total, noches, tarifaReal, precioTotalNoches });
  }, [getValues, myCard.precio]);

  useEffect(() => {
    Total();
  }, [Total, myCard]);

  console.log(total);
  const publicacion_id = id;
  const user_id = user?.user.id;
  const fecha_compra = new Date();
  const valor_compra = total.total;

  const onSubmit: SubmitHandler<Inputvali<typeof ReservaSchema>> = async (
    form
  ) => {
    const { data, error } = await supabaseClient
      .from("mis_reservaciones")
      .insert([
        {
          ...form,
          user_id,
          publicacion_id,
          fecha_compra,
          valor_compra,
          huespedes: counter,
        },
      ]);
    if (!error) {
      setLocation("/misreservaciones");
    }

    console.log(data);

    console.log("send", error);
  };

  useEffect(() => {
    console.log(errors);
  });

  if (isLogged()) {
    return <Error404 />;
  }

  return (
    <>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit as unknown)}>
          <div className="flex flex-row">
            <div className="m-1 mt-[4rem]">
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-[40rem]  "
                src={
                  myCard.image
                    ? `${imageURL}${myCard.image}`
                    : "https://a0.muscache.com/im/pictures/95ecec03-f383-4f01-88e9-29519f65e630.jpg?im_w=1200"
                }
              />
            </div>
            <div className="flex flex-col mt-[2rem] ml-[2rem]">
              <div className="flex flex-row justify-end">
                <Chip className="bg-primary text-white m-[0.25rem]">
                  <IconStar className="w-4" />
                </Chip>
                <Chip className="text-red-500 m-[0.25rem]">
                  <IconHeart className="w-4" />
                </Chip>
                <Button className="h-7 w-4 m-[0.25rem]">
                  <IconShare className="w-4" />
                </Button>
              </div>
              <h1 className="font-bold text-lg text-primary">
                {myCard.tipoVivienda},{myCard.ubicacion}
              </h1>
              <Divider className="w-[50rem] h-[0.1rem]" />
              <div className="flex flex-row justify-center">
                <Input
                  className="w-[20rem] m-[1rem]"
                  type="date"
                  label="Ingreso"
                  placeholder="Ingreso"
                  {...register("fecha_inicio", {
                    valueAsDate: true,
                    onChange: Total,
                  })}
                  defaultValue={defaulValuesDate.fecha_inicio}
                />
                <Input
                  className="w-[20rem] m-[1rem]"
                  type="date"
                  label="Salida"
                  placeholder="Salida"
                  {...register("fecha_final", {
                    valueAsDate: true,
                    onChange: Total,
                  })}
                  defaultValue={defaulValuesDate.fecha_final}
                />
              </div>
              <div className="flex flex-row ml-[4rem] mt-[1rem]">
                <Huespedes />
                <div className="ml-[2rem] ">
                  <ul>
                    <li className="flex flex-row text-end justify-between">
                      Precio por Noche:
                      <div className="flex flex-row text-end">
                        <span className="flex text-end text-primary ">$</span>
                        {myCard?.precio ?? 0}
                      </div>
                    </li>
                    <li className="flex flex-row text-end justify-between">
                      ${myCard?.precio ? myCard?.precio : 0} USD X{" "}
                      {total.noches} noches:
                      <div className="flex flex-row text-end">
                        <span className="flex text-end text-primary ml-[8rem]">
                          {" "}
                          $
                        </span>
                        {total.precioTotalNoches ? total.precioTotalNoches : 0}
                      </div>
                    </li>
                    <li className="flex flex-row text-end justify-between">
                      Tarifa por servicio del 10%:
                      <div className="flex flex-row text-end">
                        <span className="flex text-end text-primary ">$</span>
                        {total.tarifaReal ? total.tarifaReal : 0}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <Divider className="w-[50rem] h-[0.1rem] mt-[1rem]" />
              <div className="flex flex-row">
                <Button
                  type="submit"
                  className="mt-[1rem] ml-[4rem] h-[3.5rem] w-[20rem] text-xl"
                  color="primary"
                >
                  Reservar
                </Button>
                <h1 className="flex flex-row text-end font-bold text-5xl mt-[1rem] ml-[2rem] justify-between">
                  Total :
                  <div className="flex flex-row text-end justify-end">
                    <span className="flex text-end text-primary ml-[4rem] justify-end">
                      $
                    </span>
                    {total.total}
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </form>
        <Tabs variant={"underlined"} aria-label="Tabs variants">
          <Tab title="Descripcion">
            <div className="m-[1rem]">
              <h1 className="font-bold mb-[1rem]">Descripcion</h1>
              <p>{myCard.descripcion}</p>
              <h1 className="font-bold mt-[2rem]">
                Las prestaciones disponibles
              </h1>
              <ul>
                <li>{myCard.publicacion}</li>
              </ul>
            </div>
          </Tab>
          <Tab title="Reseñas">
            <div>
              <h1>Proximamente</h1>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
