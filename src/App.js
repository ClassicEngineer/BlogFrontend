import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Posts from "./components/Posts/Posts";

function App() {

    return (
        <div className="App">
            <Header/>
            <Posts/>
            <Footer/>
        </div>
  );
}

export default App;
