import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from 'components/Home/Home';
import About from 'components/About/About';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
