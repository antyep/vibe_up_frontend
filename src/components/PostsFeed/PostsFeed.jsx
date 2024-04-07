import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPosts, likePost } from "../../services/apiCalls";
import { userData } from "../../pages/userSlice";

export const PostsFeed = () => {
  const [posts, setPosts] = useState([]);

  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;
  const userId = userRdxData.credentials.userData.userId;

  useEffect(() => {
    getAllPosts(token)
      .then((res) => {
        console.log(res);
        setPosts(res.results);
      })
      .catch((error) => {
        console.error("Error while getting posts:", error);
      });
  }, [token]);

  const handleLikePost = (postId) => {
    likePost(token, postId).then((res) => {
      if (res.like) {
        const updatedPosts = posts.map((post) => {
          if (post.id === postId)
            return { ...post, like: [...post.like, res.like] };
          return post;
        });
        setPosts(updatedPosts);
        return;
      }
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          const updatedLikes = post.like.filter(
            (like) => like.id !== res.unlikeId
          );
          return { ...post, like: updatedLikes };
        }
        return post;
      });
      setPosts(updatedPosts);
    });
    // updateLik
  };

  const checkIfLiked = (post) => {
    return post?.like?.some(
      (like) => Number(like?.user?.id) === Number(userId)
    );
  };

  return (
    <div>
      <hr></hr>

      <div>
        {posts?.map((post, index) => {
          const postDate = new Date(post.createdAt);
          const postSong = post?.song?.[0];
          const postIsLiked = checkIfLiked(post);
          const postLikeCount = post?.like?.length;
          return (
            <div key={`post-${post.id}-${index}`}>
              <p>
                <span>
                  {postDate.toLocaleTimeString()}{" "}
                  {postDate.toLocaleDateString()}
                </span>
              </p>
              <p>{post.caption}</p>
              <p>
                {postSong?.name} - {postSong?.author}
              </p>
              <button onClick={() => handleLikePost(post.id)}>
                {postIsLiked ? "Unlike" : "Like"} ({postLikeCount})
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};
