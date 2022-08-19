import Nav from './components/nav'
import GlobalStyles from './GlobalStyles';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';

import {Route, Routes} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import ForgotPassword from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { EditProfile } from './pages/EditProfile';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
     <AnimatePresence exitBeforeEnter>
     <Routes>
<Route  path="/" element={<Login/>}/>
<Route  path="/fp" element={<ForgotPassword/>}/>
<Route  path="/rp" element={<ResetPassword/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/register" element={<Registration/>}/>
<Route path="/editprof" element={<EditProfile/>}/>
<Route path="/home" element={<Home/>}/>
</Routes>
</AnimatePresence>
    </div>
  );
}

export default App;
