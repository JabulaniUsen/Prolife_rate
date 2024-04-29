import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Tutor from './Pages/Tutor/Tutor'
import PricingPage from './Pages/PricingPage/PricingPage';
import Program from './Pages/Program/Program';
import Register from './SignupAsStudents/Register';
import Signin from './SignupAsStudents/Signin';
import Signup from './SignupAsStudents/Signup';
import TutorDetail from './Pages/TutorDetail/TutorDetail';
import Dashboard from './Pages/Dashboard/Dashboard';
import PaymentPage from './Pages/Payment/PaymentPage';
import TutorDashboard from './Pages/Dashboard2/TutorDashboard';
import Signup2 from './SignupAsTutor/Signup2';
import Subject from './Pages/Subject/Subject';
import EducationalInfomation from './SignupAsStudents/EducationalInfomation';
import Room from './Pages/Dashboard2/Components/Room';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import BuildProfile from './SignupAsTutor/BuildProfile';
import CheckMail from './SignupAsStudents/CheckMail';
import ForgottenPw from './SignupAsStudents/ForgottenPassword/ForgottenPw';
import CheckEmail from './SignupAsStudents/ForgottenPassword/CheckEmail';
import ChangePassword from './SignupAsStudents/ForgottenPassword/ChangePassword';

function App() {

  return (
        <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/tutor' element={<Tutor />} />
              <Route path='/pricingpage' element={<PricingPage />} />
              <Route path="/program" element={<Program />} />
              <Route path='/register' element={<Register />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/forgotten_password' element={<ForgottenPw/>} />
              <Route path='/verify_email' element={<CheckMail/>} />
              <Route path='/reset_password' element={<CheckEmail/>} />
              <Route path='/change_password' element={<ChangePassword/>} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/tutordetail' element={<TutorDetail />} />
              <Route path='/paymentpage' element={<PaymentPage />} />
              {/* <Route path='/dashboard' element={<Dashboard />} /> */}
              {/* <Route path='/tutordashboard' element={<TutorDashboard />} /> */}
              <Route path='/signupastutor' element={<Signup2 />} />
              <Route path='/subjects' element={<Subject />} />
              <Route path='/educational_information' element={<EducationalInfomation />} />
              <Route path='/room/:roomId' element={<Room />}></Route>
              <Route path='/admin' element={<AdminDashboard />} />
            </Routes>
          </BrowserRouter>
  )
}

export default App
