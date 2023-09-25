import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { IconTrash } from "@tabler/icons-react";

interface MenuItem {
  label: string;
  items: string[];
}


const menus: MenuItem[] = [
  { label: "Tipo de alojamiento", items: ["Casa", "Departamento", "Hotel", "Cabaña"] },
  { label: "Comodidades", items: ["Apartamento", "Motel", "Casa Rural", "Camping",] },
  { label: "Clasificaciones", items: ["Apartamento", "Motel", "Casa Rural",] },
  { label: "Precio", items: ["Apartamento", "Motel", "Casa Rural", "Camping",] },
];

export function Filters(): JSX.Element {



  return (
    <Card
      shadow="md"
      className="max-w-4xl w-full shadow bg-primary animate-fade-down animate-once"
      radius="lg"
    >
      <CardBody className="flex-row flex justify-center p-3 gap-3">
        {menus.map((menu) => (
          <Select
            key={menu.label}
            labelPlacement="outside"
            label={menu.label}
            className="max-w-[10rem]"
            color="primary"
          >
            {menu.items.map((item) => (
              <SelectItem
                color="primary"
                variant="flat"
                key={item}
              >
                {item}
              </SelectItem>
            ))}

          </Select>
        ))}
        <Button className="text-white border-white" variant="bordered" startContent={<IconTrash />}>
          Limpiar Filtros
        </Button>
      </CardBody>
    </Card>
  );
}
