import './style/globals.css';
import Header from "./components/Header";
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;