import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { MessagesProvider } from './components/MessagesContext'; 


const App = () => {
  return (
    <MessagesProvider> 
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/messages" element={<MessagesPage />} />
            </Routes> 
          </div>
        </Router>
      </div>
    </MessagesProvider>

  );
};

export default App;