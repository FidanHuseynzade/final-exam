import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { WishlistItemContext } from "../../context/WishlistItemContext";

const Dinamic = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Default");
  const { likeItem } = useContext(WishlistItemContext);

  const filteredData = data
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (filter) {
        case "A-Z":
          return a.name.localeCompare(b.name);
        case "Z-A":
          return b.name.localeCompare(a.name);
        case "Price":
          return a.price - b.price;
        default:
          return 0;
      }
    });

  useEffect(() => {
    async function fetchData() {
      const getData = await axios.get("http://localhost:3030/flower");
      setData(getData.data);
    }
    fetchData();
  }, []);
  return (
    <div className="dinamic">
      <span>OUR FLOWERS</span>
      <h2>New Arrivals</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <label>Filter</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Price">Price</option>
          <option value="Default">Default</option>
        </select>
      </div>
      <div className="container">
        <div className="row">
          {filteredData &&
            filteredData.map((item) => {
              return (
                <div className="col-xl-3 col-12">
                  <div className="card" key={item._id}>
                    <img src={item.image} alt="" />
                    <h5>
                      <Link to={`/${item._id}`}>{item.name}</Link>
                    </h5>
                    <p>${item.price}</p>
                    <button onClick={() => likeItem(item)}>Add</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Dinamic;
