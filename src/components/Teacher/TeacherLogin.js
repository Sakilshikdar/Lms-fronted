import React, { useState } from 'react'
import axios from 'axios'

function TeacherLogin() {
    const baseUrl = 'http://127.0.0.1:8000/api'
    const [errorMsg, setErrorMsg] = useState('');

    const [teacherLoginData, setTeacherLoginData] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setTeacherLoginData({ ...teacherLoginData, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        const teacherFormData = new FormData()
        teacherFormData.append('email', teacherLoginData.email)
        teacherFormData.append('password', teacherLoginData.password)

        axios.post(baseUrl + '/teacher-login/', teacherFormData)
            .then(res => {
            if (res.data.bool == true) {
                localStorage.setItem('teacherLogin', true)
                localStorage.setItem('teacher_id', res.data.teacher_id)
                setTeacherLoginData({ email: "", password: "" })
            }
        })
        .catch(err => {
            setErrorMsg('Invalid Email or Password')
        })
    }
    
    const token = localStorage.getItem('teacher_id')
    if (token) {
        window.location.href = '/teacher-dashboard'
    }
    

    return (
        <div className="container card w-50 mt-5">
            <h3 className='card-header'>Teacher Login</h3>
            <form className='card-body'>
                {errorMsg && <p className='border p-3 text-danger'>{errorMsg}</p>}

                <div class="form-group">
                    <label for=" my-4">Email</label>
                    <input onChange={handleChange} value={teacherLoginData.email} name="email" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                      
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input onChange={handleChange} value={teacherLoginData.password} name="password" type="password" class="form-control my-2" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button onClick={submitForm} type="submit" class="btn btn-primary my-3">Submit</button>
            </form>
        </div>
    )
}
export default TeacherLogin;