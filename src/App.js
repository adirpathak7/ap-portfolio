import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Star from './components/Star';

function App() {
  return (
    <div className="App">
      <Star/>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

