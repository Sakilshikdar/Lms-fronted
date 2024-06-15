import Home from "./Home";
import Header from "./Header";
import About from "./About";
import {Route, Routes} from "react-router-dom";
import CourseDetail from "./CoutseDetail";
import Dashboard from "./User/Dashboard";
import Sidebar from "./User/Sidebar";
import MyCourse from "./User/MyCourse";
import FavoriteCouse from "./User/FavoriteCourse";
import ProfileSetting from "./User/ProfileSetting";
import RecommendedCourse from "./User/RecommendedCourse";
import ChangePassword from "./User/ChangePassword";
import UserLogin from "./User/UserLogin";
import TeacherRegister from "./Teacher/TeacherRegistation";
import UserRegistation from "./User/UserRegistation";
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import AddCourse from "./Teacher/AddCourse";
import TeacherProfileSetting from "./Teacher/TeacherProfileSetting";
import TeacherCourse from "./Teacher/TeacherCourse";
import TeacherDetails from "./Teacher/TeacherDetails";
import AllCourses from "./AllCourses";
import PropularCourses from "./PropularCourse";
import PropularTeacher from "./PropularTeacher";
import CategoryCourses from "./CategoryCourses";
import TeacherLogout from "./Teacher/TeacherLogout";
import AddChapter from "./Teacher/AddChapter";

function Main() {
  return (
    <div>
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/propular-courses" element={<PropularCourses />} />
        <Route path="/propular-teacher" element={<PropularTeacher />} />
        <Route path="/category/:category_slug" element={<CategoryCourses />} />


        <Route path="/courseDetail/:id" element={<CourseDetail />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/mycourse" element={<MyCourse />} />
        <Route path="/favcourser" element={<FavoriteCouse />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/recommended-course" element={<RecommendedCourse />} />
        <Route path="/change-password" element={<ChangePassword  />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-registation" element={<UserRegistation />} />



        <Route path="/teacher-registation" element={<TeacherRegister/>} />
        <Route path="/teacher-login" element={<TeacherLogin/>} />
        <Route path="/teacher-logout" element={<TeacherLogout/>} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
        <Route path="/add-courses" element={<AddCourse/>} />
        <Route path="/add-chapter/:id" element={<AddChapter/>} />
        <Route path="/techer-courses" element={<TeacherCourse/>} />
        <Route path="/teacher-profile" element={<TeacherProfileSetting/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
        <Route path="/teacher-details/:id" element={<TeacherDetails/>} />
        </Routes>
    </div>
  );
}   

export default Main;