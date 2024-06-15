import TeacherSidebar from "./TeacherSidebar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function AddChapter() {
    const { id } = useParams();
    const [chapterData, setChapterData] = useState({
        title: '',
        description: '',
        vedio: '',
        remark: '',
    });

    const handleChange=((e) => {
            setChapterData({...chapterData, [e.target.name]: e.target.value})
    });

    const handleFileChange = ((e) => {
        setChapterData({...chapterData, [e.target.name]: e.target.files[0]})
    }
    );

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('course', id);
        formData.append('title', chapterData.title);
        formData.append('description', chapterData.description);
        formData.append('vedio', chapterData.vedio);
        formData.append('remarks', chapterData.remark);
       

        try {
            axios.post('http://127.0.0.1:8000/api/chapter/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then(response => {
                   window.location.href = `/add-chapter/`+id;
                })
        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container mt-4">
            <div className="row">
        <div className="col-md-3">
            <TeacherSidebar />

        </div>
        <div className="col-md-9 my-3 card">
            <h3 className="cart-header">Add Chapter</h3>

            <form>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" class="form-control" onChange={handleChange} name="title" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Description</label>
                    <textarea type="text" onChange={handleChange} name="description" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description" />

                </div>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">Remark</label>
                    <textarea type="text" onChange={handleChange} name="remark" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="This vedio based on intoduction" />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Vedio</label>
                    <input type="file" onChange={handleFileChange} name="vedio" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    />

                </div>

                <button type="button  " onClick={handleSubmit} class="btn btn-primary my-3">Submit</button>
            </form>
                </div>
                    </div>
        </div>
    );

}

export default AddChapter;