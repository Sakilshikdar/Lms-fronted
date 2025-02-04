import { Link } from 'react-router-dom';


function TeacherSidebar() {
    return (
        <div className='list-group list-group-flush'>
            <div className='card'>
                <Link to='/teacher-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
                <Link to='/techer-courses' className='list-group-item list-group-item-action'>My Courses</Link>
                <Link to='/add-courses' className='list-group-item list-group-item-action'>Add Course</Link>
                <Link to='/my-user' className='list-group-item list-group-item-action'>My Users</Link>
                <Link to='/teacher-profile' className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to='/teacher-login' className='list-group-item list-group-item-action text-danger'>Logout</Link>
            </div>
        </div>
    )
}
export default TeacherSidebar;