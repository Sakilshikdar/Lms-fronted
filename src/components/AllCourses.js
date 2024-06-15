import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


function AllCourses() {
    return (
        <div className="container">
            <h1 className="text-center my-5">Leatest Courses </h1>
            <div className="row mt-4">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-footer"> <Link to={'/courseDetail/1'}> Card title</Link> </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-footer"> <Link to={'/courseDetail/1'}> Card title</Link> </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-footer"> <Link to={'/courseDetail/1'}> Card title</Link> </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-footer"> <Link to={'/courseDetail/1'}> Card title</Link> </h5>
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

export default AllCourses;