import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { MessagesProvider } from './components/MessagesContext'; 
import Browser from './pages/Browser';
import MessagesPage from './pages/MessagesPage';

const App = () => {
  return (
    <MessagesProvider> 
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/browser" element={<Browser />} />
            </Routes> 
          </div>
        </Router>
      </div>
    </MessagesProvider>
  );
};

export default App;
