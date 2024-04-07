import "./CreatePostform.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllSongs } from "../../services/apiCalls";
import { userData } from "../../pages/userSlice";

export const CreatePostForm = ({ onPost }) => {
  const [songs, setSongs] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedSong, setSelectedSong] = useState({});

  const handleSubmit = () => {
    // @todo: create post endpoint connection
    // createPost(token, postData)
    // .then(() => {
    //     if (onPost) onPost();
    // })
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

  //   // @todo: get songs from api
  //   // getSongs().then((res) => setSongs(res.songs));
  // }, [token]);

  // const isValid = @todo: chequear que haya valores validos para no mandar post vacio

  return (
    <div>
      hola
      <div>
        <div>
          <label htmlFor="songs">Choose a song: </label>
        </div>
        <select
          name="songs"
          id="songs"
          onChange={(e) =>
            setSelectedSong(songs.find((song) => song.name === e.target.value))
          }
        >
          {songs &&
            songs.map((song) => {
              return (
                <option key={song.name} value={songs.name}>
                  {song.name} - {song.author}
                </option>
              );
            })}
        </select>
      </div>
      <div>
        <div>
          <label htmlFor="message">Message</label>
        </div>
        <textarea value={message} onChange={handleChangeMessage} />
      </div>
      <button onClick={handleSubmit}>Create post</button>
    </div>
  );
};
