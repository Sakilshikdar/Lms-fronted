import { useEffect } from "react";
import TeacherSidebar from "./TeacherSidebar";
import { useState } from "react";
import axios from "axios";


function AddCourse() {
    const [category, setCategory] = useState([]);
    const teacher_id=localStorage.getItem('teacher_id')
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        techs: '',
        f_img: '',
        category: '',
    });

    const handleChange=((e) => {
            setCourseData({...courseData, [e.target.name]: e.target.value})
    });

    const handleFileChange = ((e) => {
        setCourseData({...courseData, [e.target.name]: e.target.files[0]})
    }
    );

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', courseData.title);
        formData.append('description', courseData.description);
        formData.append('techs', courseData.techs);
        formData.append('teacher', teacher_id);
        formData.append('featured_image', courseData.f_img);
        formData.append('category', courseData.category);
       

        try {
            axios.post('http://127.0.0.1:8000/api/course/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then(response => {
                   window.location.href = '/add-courses';
                })
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/category/');
            const data = await response.json();
            setCategory(data);
        }
        getCategories();
    }, []);

   


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <TeacherSidebar />

                </div>
                <div className="col-md-9 my-3 card">
                    <h3 className="cart-header">Add Course</h3>

                    <form>
                        <div class="form-group my-3">
                            <label for="category">Category</label>
                            <select onChange={handleChange} name="category" class="form-select" aria-label="Default select example">
                                {category.map((cat) => {
                                    return (
                                        <option value={cat.id}>{cat.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div class="form-group my-3">
                            <label for="title">Title</label>
                            <input onChange={handleChange} type="text" name="title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea type="text" onChange={handleChange} name="description" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description" />

                        </div>
                        <div class="form-group my-3">
                            <label for="techs">Technologies</label>
                            <textarea type="text" onChange={handleChange} name="techs" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Php , Python, Javascripts,Html,Css" />

                        </div>
                        <div class="form-group">
                            <label for="f_img">Feature Image</label>
                            <input type="file" onChange={handleFileChange} name="f_img" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            />

                        </div>

                        <button onClick={handleSubmit} type="submit" class="btn btn-primary my-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default AddCourse;