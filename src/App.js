import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import OurService from './components/OurService';
import Shop from './components/Shop';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Sidebar from './Admin/Sidebar';
import PublicRoute from './ProtectedRoute/PublicRoute';
import PrivateRoute from './ProtectedRoute/PrivateRoute';
import Blog from './components/Blog';

function App() {
  return (
    <div className='overflow-x-hidden'>
    

      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/about-us' element={<About/>} />
          <Route path='/our-service' element={<OurService/>} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/shop' element={<Shop/>} />
          <Route path='/contact-us' element={<Contact/>} />
        </Route>

        {/* Private route for admin dashboard */}
        <Route element={<PrivateRoute />}>
          <Route path='/admin/dashboard' element={<Sidebar />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
