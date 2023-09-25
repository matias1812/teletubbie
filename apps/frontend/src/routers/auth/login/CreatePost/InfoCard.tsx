
import { PostContext } from "../../../../context/Auth";
import PostCard from "./PostCard";

const InfoCard = () => {
  const { post } = PostContext();

  return (
    <>
      {post.map((posting, indexPost) => {
        return (
          <div key={`indexPost-${indexPost}`}>
            <PostCard post={posting} />
          </div>
        );
      })}
    </>
  );
};

export default InfoCard;
