import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    status: "",
  });

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputvalue = {
      username: formValue.username,
      email: formValue.email,
      phone: formValue.phone,
      address: formValue.address,
      status: formValue.status,
    };
    // console.log(allInputvalue);
    let res = await fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      body: JSON.stringify(allInputvalue),
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    let resjson = await res.json();
    if (res.status === 200) {
      setMessage(resjson.success);
      setTimeout(() => {
        navigate("/userdata");
      }, 2000);
    } else {
      setMessage("Sorry error occured...");
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mt-2">Add New User</h5>
            <p className="text-success">{message}</p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      value={formValue.username}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formValue.email}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Phone No:</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={formValue.phone}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={formValue.address}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Status:</label>
                    <select
                      className="form-control"
                      name="status"
                      value={formValue.status}
                      onChange={handleInput}
                    >
                      <option value="">Please Select</option>
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label"></label>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddUser;
