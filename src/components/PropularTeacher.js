import React, { useEffect } from 'react';
import logo from '../teacher.png';
import { Link } from 'react-router-dom';
import axios from 'axios';


function PropularTeacher() {
    const [Teacher, setTeacher] = React.useState([])
    const baseUrl = 'http://127.0.0.1:8000/api/'
    useEffect(() => {
        axios.get(`${baseUrl}teacher/`)
            .then(res => {
                setTeacher(res.data)
            })
            .catch(err => {
                console.log(err)    
            }
            )
    }, [])
    return (
        <div className="container">
            <h1 className="text-center my-5">Propular Teacher </h1>
            <div className="row mt-4">
        
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <Link to={'/teacher-details/1'}> Teacher name</Link> </h5>
                        </div>
                        <div className="card-footer">
                            <sapn>Rating: 4.5/5</sapn>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <Link to={'/teacher-details/1'}> Teacher name</Link> </h5>
                        </div>
                        <div className="card-footer">
                            <sapn>Rating: 4.5/5</sapn>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <Link to={'/teacher-details/1'}> Teacher name</Link> </h5>
                        </div>
                        <div className="card-footer">
                            <sapn>Rating: 4.5/5</sapn>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <Link to={'/teacher-details/1'}> Teacher name</Link> </h5>
                        </div>
                        <div className="card-footer">
                            <sapn>Rating: 4.5/5</sapn>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <Link to={'/teacher-details/1'}> Teacher name</Link> </h5>
                        </div>
                        <div className="card-footer">
                            <sapn>Rating: 4.5/5</sapn>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <Link to={'/teacher-details/1'}> Teacher name</Link> </h5>
                        </div>
                        <div className="card-footer">
                            <sapn>Rating: 4.5/5</sapn>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <Link to={'/teacher-details/1'}> Teacher name</Link> </h5>
                        </div>
                        <div className="card-footer">
                            <sapn>Rating: 4.5/5</sapn>
                        </div>
                    </div>
                </div>
            

            </div>

            {/* pagination start */}

            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>


            {/* pagination end */}
        </div>
    );
}

export default PropularTeacher;