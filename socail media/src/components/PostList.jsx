import { useContext } from "react";
import Post from "./Post";
import { Postlist as postlistData } from "../store/Ppost-list-store";

const PostList = () => {
  const { postlist } = useContext(postlistData);

  return (
    <>
      {postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
