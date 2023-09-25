import React from "react";
import { Card, CardHeader, CardFooter, Chip } from "@nextui-org/react";
import { IconCurrentLocation } from "@tabler/icons-react";
import { PostCardProps } from "../Interface";



const PostCard: React.FC<PostCardProps> = ({ post }) => {

  return (
    <Card
      isFooterBlurred
      className="w-64 h-[300px] col-span-12 sm:col-span-5 pointer-events-auto"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <Chip
          color="default"
          className="absolute bg-white/30 border-zinc-100/50 z-10"
          variant="shadow"
        >
          {post.titulo}
        </Chip>
      </CardHeader>
      <img
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        {...post.img}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black font-semibold overflow-clip">
            {post.tipoVivienda}
          </p>
          <p className="text-black text-tiny gap-2 flex flex-row items-center">
            <IconCurrentLocation /> {post.ingreso} {post.salida}
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <span className="line-through">$ 1500</span>
          <Chip color="primary" variant="shadow">
            ${post.precio}
          </Chip>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
