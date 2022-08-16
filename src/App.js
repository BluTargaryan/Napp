import Nav from './components/nav'
import GlobalStyles from './GlobalStyles';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';

import {Route, Routes} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
     <Nav/>
     <AnimatePresence exitBeforeEnter>
     <Routes>
<Route  path="/" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/register" element={<Registration/>}/>
<Route path="/home" element={<Home/>}/>
</Routes>
</AnimatePresence>
    </div>
  );
}

export default App;
