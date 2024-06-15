import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function FavoriteCouse() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    
                <div class="card-header">
                        |Favorite Courses
                    </div>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Created by</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                    <Link to={'/'}>name</Link>
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        
    );
}

export default FavoriteCouse;