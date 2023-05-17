import './App.css';
import { Route, Routes } from "react-router-dom";
import Register from "./common/Reg";
import Login from "./common/Login";
import GuestHome from './guest/GuestHome';
import UserHome from './user/UserHome';
import AdminHome from './admin/AdminHome';
import About from './common/About';
import Contact from './common/Contact';
import ShowCourses from './common/ShowCourses';
import ShowAdmins from './admin/ShowAdmins';
import ShowUsers from './admin/ShowUsers';
import UserProfile from './user/UserProfile';
import AdminLogin from './admin/AdminLogin';

import ForgetPass from './common/ForgetPass';
import UserCourses from './user/UserCourses';
import AdminCourses from './admin/AdminCourses';
import CreateAdmin from './admin/CreateAdmin';
import UserEditProfile from './user/UserEditProfile';
import CreateCourse from './admin/CreateCourse';
import UpdateCourse from './admin/UpdateCourse';



function App() {
  return (
    <div className="App">
      <>      
      
       <Routes>           
        <Route exact path="/" Component={Login} />     
        <Route exact path="/reg" Component={Register} />
        <Route exact path="/courses" Component={UserCourses} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/sendMail" Component={ForgetPass} />
        <Route exact path="/admins" Component={ShowAdmins} />
        <Route exact path="/users" Component={ShowUsers} />
        <Route exact path="/profile" Component={UserProfile} />
        <Route exact path="/editProfile" Component={UserEditProfile} />
        <Route exact path="/guestHome" Component={GuestHome} />
        <Route exact path="/userHome" Component={UserHome} />
        <Route exact path="/adminHome" Component={AdminHome} />
        <Route exact path="/adminLogin" Component={AdminLogin} />
        <Route exact path="/admincourses" Component={AdminCourses} />
        <Route exact path="/showUsers" Component={ShowUsers} />
        <Route exact path="/showAdmins" Component={ShowAdmins} />
        <Route exact path="/createAdmin" Component={CreateAdmin} />
        <Route exact path="/createCourse" Component={CreateCourse} />
        <Route exact path="/updateCourse" Component={UpdateCourse} />
        <Route exact path="*" Component={Login} />
      </Routes>
      </>
    </div>
  );
}

export default App;

