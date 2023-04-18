import './App.css';
import Header from './Components/Header/Header';
import Gameboard from './Components/Gameboard/Gameboard';
import PlayingButtons from './Components/PlayingButtons/PlayingButtons';
import Footer from './Components/Footer/Footer';



function App() {

  return (
    <div className="App">
      <Header />
      <Gameboard />
      <PlayingButtons />
      <Footer />
    </div>
  );
}

export default App;
