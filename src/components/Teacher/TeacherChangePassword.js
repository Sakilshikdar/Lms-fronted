

import React from 'react';
import Sidebar from './Sidebar';
import TeacherSidebar from './TeacherSidebar copy';

function TeacherChangePassword() {

return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-3">
                <TeacherSidebar />
            </div>
            <div className="col-md-9">
                <form>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                  
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>


    );
}

export default TeacherChangePassword;