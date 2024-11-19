import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CourseContent from './pages/coursecontent'

const App = () => {
  return (
    <MessagesProvider> 
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/coursecontent/:courseId' element={<CourseContent/>}/>
            </Routes> 
          </div>
        </Router>
      </div>
    </MessagesProvider>
  );
};

export default App;
