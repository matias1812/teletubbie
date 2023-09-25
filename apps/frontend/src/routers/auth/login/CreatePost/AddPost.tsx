import { useEffect } from "react";
import { supabaseClient } from "../../../../supabase";
import { PostContext } from "../../../../context/Auth";
import InfoCard from "./InfoCard";


export const AddPost = () => {
  const { setPost } = PostContext();

  useEffect(() => {
    async function fetchCard() {
      try {
        let { data: publicacion } = await supabaseClient
          .from("publicacion")
          .select("*");
        if (publicacion) {
          setPost(publicacion as any);
        }
        console.log(publicacion);
      } catch (error) {
        console.error("Error fetching card: ", error);
      }
    }

    fetchCard();
  }, [setPost]);

  

  return (
    <>
      <InfoCard />
    </>
  );
};
