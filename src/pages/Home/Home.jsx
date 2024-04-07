import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import { PostsFeed } from "../../components/PostsFeed/PostsFeed";

import "./Home.css";

export const Home = () => {
  const refreshPage = () => console.log("refresca o algo");

  return (
    <div className="home-wrapper">
      <CreatePostForm onPost={refreshPage} />
      <PostsFeed />
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
