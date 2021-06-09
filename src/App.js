
import "./App.css";
import NavBar from "./components/NavBar";

import  ProductCardClassWithProps from  "./components/ProductCardClassWithProps";
function App() {
  return(
      <div className="App">
        <NavBar />
        <ProductCardClassWithProps precio="$5500" peso="20kg"/>

      </div>
    )
}

export default App;
