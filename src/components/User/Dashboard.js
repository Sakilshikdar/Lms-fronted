import React from 'react';
import Sidebar from './Sidebar';
import MyCourse from './MyCourse';

function Dashboard() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    
            Dashboard
                </div>
            </div>
        </div>

        
    );
}

export default Dashboard;