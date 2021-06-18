import './App.css';
import navbar from './components/navbar'
import storeItems from './components/storeItems';
import welcome from './components/welcome'

function App() {
  return (
    <div className="App">
      <div className="navbar"></div>
      <div className="welcomeSection"></div>
      <div className="productList"></div>
    </div>
  );
}

export default App;
