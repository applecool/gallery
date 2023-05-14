import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error(response.status);
    }
  };

  return (
    <div>
      <Header title="Photo gallery"></Header>
      <Search
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      ></Search>
    </div>
  );
};

export default App;
