import React from 'react';
import logo from '../logo.svg';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function CourseDetail() {
  const { id } = useParams();
  return (
    <div className='container mt-3'>
      <div class="row">
        <div className='col-4'><img src={logo} className="img-thumnail" alt="..." />
        </div>
        <div className='col-8'>
          <h3>
            Course Title</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p className='fw-bold'>Course By: <Link to={'/teacher-details/1'}>Teacher 1</Link></p>
          <p className='fw-bold'>Duration: 3 Hours 30 Minuts</p>
          <p className='fw-bold'>Total Enrolled: 450 Students</p>
          <p className='fw-bold'>Ratings:
            4.5/5
          </p>
        </div>
      </div>

      {/* {course content} */}
      <h3 className='mt-4'>Course Content</h3>
      <ul className='list-group'>
        <li className='list-group-item'>1. Introduction <button className='btn btn-sm btn-danger float-end ' data-toggle="modal" data-target="#videoModall"> <i className='bi-youtube'></i> </button></li>
        <li className='list-group-item'>2. Overview <button className='btn btn-sm btn-danger float-end '> <i className='bi-youtube'></i> </button> </li>
        <li className='list-group-item'>3. Course Content <button className='btn btn-sm btn-danger float-end '> <i className='bi-youtube'></i> </button> </li>
        <li className='list-group-item'>4. Conclusion <button className='btn btn-sm btn-danger float-end '> <i className='bi-youtube'></i> </button> </li>
      </ul>


      {/* {Vedio Model} */}
      <div className="modal fade" id="videoModall" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Video 1</h5>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
              <div class="ratio ratio-16x9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* {Related course} */}
      <h3 className='mt-4'>Related Course</h3>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CourseDetail;