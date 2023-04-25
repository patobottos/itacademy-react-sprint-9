import "./App.css";
import Header from "./Components/Header/Header";
import Gameboard from "./Components/Gameboard/Gameboard";
import Footer from "./Components/Footer/Footer";
import Provider from "./application/provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Gameboard />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
