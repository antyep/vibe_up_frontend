import "./CreatePostform.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createPost, getAllSongs } from "../../services/apiCalls";
import { userData } from "../../pages/userSlice";

// Todo: modals

export const CreatePostForm = ({ onPost }) => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [message, setMessage] = useState("");

  const isValid = (message) => {
    return message.trim().length > 0;
  };

  const handleSubmit = () => {
    if (!isValid(message)) {
      console.error("Field message cannot be empty");
      return;
    }
    if (!selectedSong) {
      console.error("Song must be selected");
      return;
    }

    const postData = {
      caption: message,
      song: selectedSong,
    };

    createPost(token, postData)
      .then((response) => {
        console.log("Post created successfully:", response);
        if (onPost) onPost();
        setMessage("");
      })
      .catch((error) => {
        console.error("Error while creating post:", error);
      });
  };

  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;

  useEffect(() => {
    getAllSongs(token)
      .then((res) => {
        setSongs(res.results);
      })
      .catch((error) => console.log("Error while getting songs", error));
  }, [token]);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSongChange = (e) => {
    setSelectedSong(e.target.value);
  };

  return (
    <div className="post-creation container">
      <span>
        <h3>New post</h3>
      </span>
      <div>
        <div>
          <label htmlFor="songs" className="song-picker">
            Choose the song you would like to share{" "}
          </label>
        </div>
        <select
          className="song-selector"
          name="songs"
          id="songs"
          onChange={handleSongChange}
          value={selectedSong}
        >
          <option>Select a song...</option>
          {songs &&
            songs.map((song) => {
              return (
                <option key={song.name} value={song.id}>
                  {song.name} - {song.author}
                </option>
              );
            })}
        </select>
      </div>
      <div>
        <div>
          <label htmlFor="hello" className="caption-message">
            Spread your message here
          </label>
        </div>
        <textarea
          value={message}
          onChange={handleChangeMessage}
          className="caption-textarea"
        />
      </div>
      <button className="button" onClick={handleSubmit}>
        Create new post
      </button>
    </div>
  );
};
