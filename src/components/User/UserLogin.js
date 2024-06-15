function UserLogin() {
    return (
        <div className="container w-50 mt-5">
            <h3>Teacher Login</h3>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1 my-4">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control my-2" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary my-3">Submit</button>
            </form>
        </div>
    )
}
export default UserLogin;