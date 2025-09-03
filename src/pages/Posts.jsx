import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h3>Posts</h3>
      {filter && <p>Фильтр: {filter}</p>}
      {loading ? (
        <p> Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
