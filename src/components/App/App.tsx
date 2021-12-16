import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from 'components/Home/Home';
import About from 'components/About/About';
import { Provider, rootStore } from 'stores/RootStore';

const App = (): JSX.Element => {
  return (
    <Provider value={rootStore}>
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
