import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return (
    <>
      <h3>Post</h3>
      <p>Пост № {id}</p>
      <p>Lorem ipsum dolor sit.</p>
    </>
  );
};

export default Post;
