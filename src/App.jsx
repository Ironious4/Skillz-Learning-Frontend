import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Home from './pages/Home';
import Profile from './pages/InstructorProfile';
import InstructorProfile from './components/InstructorProfile'; 
import UsersList from './pages/users';
import PaymentPage from './pages/PaymentPage';
import Browser from './pages/Browser';
import { MessagesProvider } from './components/MessagesContext'; 
import MessagesPage from './pages/MessagesPage';
import TwoFactorAuth from './components/TwoFactorAuth'
import CourseContent from './pages/coursecontent'

const App = () => {
  return (
    <MessagesProvider> 
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/users" element={<UsersList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/instructorprofile" element={<InstructorProfile />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/payment/:courseId/:learnerId/:price" element={<PaymentPage />} />
              <Route path="/browser" element={<Browser />} />
              <Route path="/TwoFactorAuth" element={<TwoFactorAuth />} />
              <Route path='/coursecontent/:courseId' element={<CourseContent/>}/>
            </Routes> 
          </div>
        </Router>
      </div>
    </MessagesProvider>
  );
};

export default App;
