import React from "react";

const Food = ({ item }) => {
  return (
    <>
      <div className="card col-12 col-md-6 col-lg-6 col-sl-4 my-3">
        <div className="row card-body">
          <div className="col-12 col-md-12 col-lg-4">
            <img src="/images/OIP.jpg" alt={item.name} className="img-fluid" />
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <div className="pt-4 pb-3 card-header">
              <h1 className="card-title">{item.name}</h1>
              <p className="card-text">{item.desc}</p>
            </div>
            <div className="card-footer bg-secondary text-white">
              <div className="d-flex justify-content-between">
                <h5>Price : {item.price} Taka</h5>
                <a href="none">
                  <button className="btn btn-dark">Order Now</button>
                </a>
              </div>
              <p className="card-text">Prices are not very rich.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
