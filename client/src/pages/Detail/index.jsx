import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
// import { WishlistItemContext } from "../../context/WishlistItemContext";

const Detail = () => {
  const { id } = useParams();
//   const { likeItem, wishlist } = useContext(WishlistItemContext);
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const getById = await axios.get(`http://localhost:3030/flower/${id}`);
      setData(getById.data);
    }
    fetchData();
  }, []);
  return (
    <div className="detail">
      {data && (
        <div className="detail-card" key={data._id}>
          <div className="container">
            <div className="card">
              <img src={data.image} alt="" />
              <h1>{data.name}</h1>
              <p>${data.price}</p>
              <Link to={"/"}>Back</Link>
              {/* <button
                onClick={() => {
                  likeItem(wishlist);
                }}
              >
                Add
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
