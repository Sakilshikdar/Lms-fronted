import React from 'react'
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="container mt-4">
                    <div className="card">
                        <div id="list-example" class="list-group">
                            <Link to={'/user-dashboard'} class="list-group-item list-group-item-action" >Dashboard</Link>
                            <Link to={'/mycourse'} class="list-group-item list-group-item-action" >My Courses</Link>
                            <Link to={'/favcourser'} class="list-group-item list-group-item-action" >Fevorite Courser</Link>
                            <Link to={'/recommended-course'} class="list-group-item list-group-item-action" >Recommended Course</Link>
                            <Link to={'/profile-setting'} class="list-group-item list-group-item-action" >Profile</Link>
                            <Link to={'/change-password'} class="list-group-item list-group-item-action" >Change Password</Link>
                            <Link to={'/'} class="list-group-item list-group-item-action text-danger" >Logout</Link>
                        </div>
                    </div>
                </div>
            
    )
}

export default Sidebar;