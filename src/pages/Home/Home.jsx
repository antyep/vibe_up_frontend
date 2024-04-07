import { useState } from "react";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostform";
import { PostsFeed } from "../../components/PostsFeed/PostsFeed";

import "./Home.css";

export const Home = () => {
  const [seed, setSeed] = useState(1);

  const reset = () => {
    setSeed(Math.random());
  };

  return (
    <div className="home-wrapper">
      <CreatePostForm onPost={reset} />
      <PostsFeed key={seed} />
      {/*     

// Feed

// Dropdown con los song lists // Get song list
// Create post with song list and text // Create post with song associated (and user etc)


// Listado de posts ordenados por fecha // Get posts with pagination
// Likes // Create / delete likes with current user



//////

SONG LISTS
TEXTAREA

CREATE POST 

/////


////

RETRIEVEPOSTS BLABLA
PAGINATION

//// */}
    </div>
  );
};
