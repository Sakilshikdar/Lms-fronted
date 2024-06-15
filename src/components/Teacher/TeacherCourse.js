import { Link } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';

function TeacherCourse() {
    const [courseData, setCourseData] = useState([]);
    const teacher_id = localStorage.getItem('teacher_id');
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/teacher-course/' + teacher_id + '/')
            .then(response => {
                setCourseData(response.data);
            }
            ).catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(courseData);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <TeacherSidebar />
                </div>
                <div className="col-md-9">
                    
                <div class="card-header">
                        My Courses
                    </div>
                    <table class="table table-light">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Created by</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseData.map((course, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td> 
                                            <img src={ course.featured_image} alt={course.title} style={{ width: '50px', height: '50px' }} />
                                        </td>
                                        <td>{course.title}</td>
                                        <td>{course.teacher}</td>
                                        <td>
                                            <Link className='btn btn-danger btn-sm active'>Delete</Link>
                                            <Link className='btn btn-success btn-sm active ms-2' to={`/add-chapter/`+course.id}>Add Chapter</Link>
                                        </td>
                                    </tr>
                                );

                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        
    );
}

export default TeacherCourse;