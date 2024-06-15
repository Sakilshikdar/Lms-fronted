import React from 'react';
import TeacherSidebar from './TeacherSidebar';

function TeacherDashboard() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <TeacherSidebar />
                </div>
                <div className="col-md-9">
                    
            Dashboard
                </div>
            </div>
        </div>

        
    );
}

export default TeacherDashboard;