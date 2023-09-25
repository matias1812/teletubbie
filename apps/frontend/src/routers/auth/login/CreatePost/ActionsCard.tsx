import { Button } from "@nextui-org/react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";


const ActionsCard: React.FC = () => {


  return (
    <div className="flex space-x-12 py-[1rem]">
      <Button color="default" endContent={<IconEdit />}>
        Editar
      </Button>
      <Button color="danger" startContent={<IconTrash />}>
        Borrar
      </Button>
    </div>
  );
};

export default ActionsCard;
