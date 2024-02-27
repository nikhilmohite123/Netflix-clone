
import './App.css'
import Main from "./component/Main/Main";
import Navbar from "./component/Nav/Navbar";
import SearchResults from './component/SerchResult/SerchResult';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Main/>
    <SearchResults/>
    </div>
  );
}

export default App;
