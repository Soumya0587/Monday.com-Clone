import React from "react";
import Header from "./Components/Header";

import './App.css';
import AllRoutes from "./Pages/Allroutes";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
