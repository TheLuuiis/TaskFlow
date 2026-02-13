import { useState } from 'react';
import './style/globals.css';
import Header from "./components/Header";
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;