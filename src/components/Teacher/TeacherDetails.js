import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../.././logo.svg';
function TeacherDetails() {
    const {id} = useParams();
  return (
    <div className='container mt-3'>
      <div class="row">
        <div className='col-4'><img src={logo} className="img-thumnail" alt="..." />
        </div>
        <div className='col-8'>
          <h3>
            Jhon Doe</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p className='fw-bold'>Skills: <Link to={'/category/php'}> PHP</Link> <Link to={'/category/php'}> Java</Link> <Link to={'/category/php'}> python</Link></p>
          <p className='fw-bold'>Recent Course: <Link to={'/category/php'} >React Js</Link></p>
          <p className='fw-bold'>Ratings:
            4.5/5
             </p>
        </div>
      </div>

      {/* {course content} */}
      <h3 className='mt-4'>Courses List</h3>
      <ul className='list-group'>
              <li className='list-group-item'><Link to={'/details/1</li'}>PHP</Link></li>
              <li className='list-group-item'><Link to={'/details/1</li'}>Java</Link></li>
              <li className='list-group-item'><Link to={'/details/1</li'}>React js</Link></li>
              <li className='list-group-item'><Link to={'/details/1</li'}>Django</Link></li>
              <li className='list-group-item'><Link to={'/details/1</li'}>Cpp</Link></li>
      </ul>
    </div>
  );
}

export default TeacherDetails;