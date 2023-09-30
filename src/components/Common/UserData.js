import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserData() {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const getUserdata = async () => {
      const reqdata = await fetch("http://127.0.0.1:8000/api/users/", {
        header: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const resdata = await reqdata.json();
      setUserdata(resdata);
      // console.log(resdata);
    };
    getUserdata();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mt-2">Welcome to UserData</h5>

            <div className="d-grid d-md-flex justify-content-md-end mb-3">
              <Link to="/adduser" className="btn btn-warning">
                Add User
              </Link>
            </div>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Sr.Number</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userdata.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.username}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.address}</td>
                      <td>{data.status === true ? "Active" : "Inactive"}</td>
                      <td>
                        <Link to="/editUser" className="btn btn-success mx-2">
                          Edit
                        </Link>
                        <Link to="/deleteUser" className="btn btn-danger">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserData;
