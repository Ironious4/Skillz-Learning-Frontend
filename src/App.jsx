import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PaymentPage from './pages/PaymentPage';
import Browser from './pages/Browser';
import { MessagesProvider } from './components/MessagesContext'; 
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
              <Route path="/payment/:courseId/:learnerId/:price" element={<PaymentPage />} />
              <Route path="/browser" element={<Browser />} />
            </Routes> 
          </div>
        </Router>
      </div>
    </MessagesProvider>
  );
};

export default App;
