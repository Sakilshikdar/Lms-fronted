

import React from 'react';
import Sidebar from './Sidebar';

function ProfileSetting() {

return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">

                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Interest</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="interest" />
                    </div>

                    <div class="form-group
                    ">
                        <label for="exampleInputPassword1">Profile Photo</label>
                        <input type="file" class="form-control" id="exampleInputPassword1" />
                        </div>
                  
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>


    );
}

export default ProfileSetting;