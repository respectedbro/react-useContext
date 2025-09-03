import { Link, useSearchParams } from "react-router-dom";

const Posts = () => {
  const postList = [
    { id: 1, title: "Первый пост" },
    { id: 2, title: "React круче Angular" },
    { id: 3, title: "Фронтенд в 2025" },
  ];

  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  return (
    <>
      <h3>Posts</h3>
      {filter && <p>Фильтр: {filter}</p>}
      <ul>
        {postList.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
