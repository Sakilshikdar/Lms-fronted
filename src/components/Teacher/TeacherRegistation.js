import React, { useState } from 'react';
import axios from 'axios';

function TeacherRegister() {
    const [teacherData, setTeacherData] = useState({
        full_name: '',
        email: '',
        password: '',
        mobile_no: '',
        qualification: '',
        skills: '',
        status: '',
        address: '',
    });

    const [status, setStatus] = useState(null);

    const handleChanges = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const TeacherFortData = new FormData();
        TeacherFortData.append('full_name', teacherData.full_name);
        TeacherFortData.append('email', teacherData.email);
        TeacherFortData.append('password', teacherData.password);
        TeacherFortData.append('mobile_no', teacherData.mobile_no);
        TeacherFortData.append('qualification', teacherData.qualification);
        TeacherFortData.append('skills', teacherData.skills);
        TeacherFortData.append('address', teacherData.address);

        try {
            await axios.post('http://127.0.0.1:8000/api/teacher/', TeacherFortData);
            setTeacherData({
                full_name: '',
                email: '',
                password: '',
                mobile_no: '',
                qualification: '',
                skills: '',
                address: '',
                status: '',
            });
            setStatus('success');
        } catch (err) {
            console.log(err);
            setStatus('error');
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {status === 'success' && <div className="alert alert-success" role="alert">Thanks for Registration</div>}
                    {status === 'error' && <div className="alert alert-danger" role="alert">Something went wrong</div>}
                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
                        <div className="card-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="full_name" className="form-label">Full Name</label>
                                    <input name='full_name' value={teacherData.full_name} onChange={handleChanges} type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input name='email' value={teacherData.email} onChange={handleChanges} type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input name='password' value={teacherData.password} onChange={handleChanges} type="password" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile_no" className="form-label">Phone Number</label>
                                    <input name='mobile_no' value={teacherData.mobile_no} onChange={handleChanges} type="number" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="qualification" className="form-label">Qualification</label>
                                    <input name='qualification' value={teacherData.qualification} onChange={handleChanges} type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input name='address' value={teacherData.address} onChange={handleChanges} type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="skills" className="form-label">Skills</label>
                                    <textarea name='skills' value={teacherData.skills} onChange={handleChanges} className="form-control"></textarea>
                                    <div id="emailHelp" className="form-text">Php, Python, Javascript, etc</div>
                                </div>
                                <div className="form-check">
                                    <input name='status' checked={teacherData.status} onChange={handleChanges} type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="status">Status</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherRegister;
