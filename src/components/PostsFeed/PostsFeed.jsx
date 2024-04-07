import { useState, useEffect } from "react";

export const PostsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // @todo Llamar api y setear con setPosts el valor recibido
    // getPosts(token).then((res) => setPosts(res.posts));
    setPosts([
      { title: "titulo" },
      { title: "titul2" },
      { title: "titulasdfasdfas" },
    ]);
  }, []);

  //   const handleLikePost = () => {
  // 	// updateLik
  //   }

  return (
    <div>
      <hr></hr>

      <div>
        {posts.map((post, index) => {
          return <div key={`post-${index}`}>{post.title}</div>;
        })}
      </div>
    </div>
  );
};
