import Nav from './components/nav'
import GlobalStyles from './GlobalStyles';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
     <Nav/>
     <Routes>
<Route  path="/" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
</Routes>

    </div>
  );
}

export default App;
