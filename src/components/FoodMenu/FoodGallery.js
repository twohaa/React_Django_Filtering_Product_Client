import React, { useEffect, useState } from "react";
import Food from "./Food";

const FoodGallery = () => {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("");

  const fetchApidata = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/foods/");
      const data = await res.json();
      console.log(data);
      if (data.length > 0) {
        setItems(data);
        setFiltered(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApidata();
  }, []);

  // const filterItem = (cat) => {
  //   const updatedItems = items.filter((currElement) => {
  //     return currElement.category === cat;
  //   });
  //   setItems(updatedItems);
  // };

  useEffect(() => {
    if (category === "") {
      setFiltered(items);
      return;
    }
    const filtered = items.filter((item) => item.category.includes(category));
    setFiltered(filtered);
  }, [category]);

  return (
    <>
      <div>
        <h1 className="my-3 text-center">Order Your Favourite Dish</h1>
        <hr />
        <div className="container">
          <div className="d-flex justify-content-around">
            <button className="btn btn-warning" onClick={() => setCategory("")}>
              All
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setCategory("breakfast")}
            >
              Breakfast
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setCategory("lunch")}
            >
              Lunch
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setCategory("evening")}
            >
              Evening
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setCategory("dinner")}
            >
              Dinner
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4 bg-dark">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row my-3">
              {filtered.map((item, index) => {
                return <Food key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodGallery;
