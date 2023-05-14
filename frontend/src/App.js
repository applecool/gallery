import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [word, setWord] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }
  return (
    <div>
     <Header title='Photo gallery'></Header>
     <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}></Search>
    </div>
  );
}

export default App;
