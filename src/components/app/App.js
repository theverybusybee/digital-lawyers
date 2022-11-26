import "./App.css";
import Header from "../header/header";
import Voting from "../voting/voting";
import Footer from '../footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Voting/>
      <Footer/>
    </div>
  );
}

export default App;
