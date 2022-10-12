import { Login } from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Update } from './components/Update/Update';
import ForgotPassword from './pages/ForgotPassword';
import EmailVerification from './pages/EmailVerification';
import UserVerified from './pages/UserVerified';
import ResetPassword from './pages/ResetPassword';
import LandingPage from './pages/LandingPage';
import { Signup } from './components/Signup/Signup';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AdminDashboard2 from './components/AdminDashboard/AdminDashboard2';
import UserRoutes from './routes/UserRoutes';
import ErrorPage from './pages/ErrorPage';
import AdminRoutes from './routes/AdminRoutes';


import MessageAlertModal from './components/MessageAlertModal'
import NotFound from './components/Pagenotfound';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/verification' element={<EmailVerification />} />
          <Route path='/users/verify/:token' element={<UserVerified content="register" />} />
          <Route path="*" element={<NotFound/>} />

          <Route element={<UserRoutes />}>
            <Route path="/update" element={<Update />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/users/change-password/:id' element={<ResetPassword />} />
          </Route>

          <Route element = {<AdminRoutes/>}>
            <Route path='/admin-dashboard' element={<AdminDashboard2 />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
