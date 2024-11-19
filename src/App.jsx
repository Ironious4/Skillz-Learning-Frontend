import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/InstructorProfile';
import InstructorProfile from './components/InstructorProfile'; 
import UsersList from './pages/users';

const App = () => {
  return (
    <MessagesProvider> 
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/users' element={<UsersList/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/instructorprofile' element={<InstructorProfile/>}/>
            </Routes> 
          </div>
        </Router>
      </div>
    </MessagesProvider>

  );
};

export default App;