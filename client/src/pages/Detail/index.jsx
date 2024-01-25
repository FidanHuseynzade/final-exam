import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const Detail = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const getById = await axios(`http://localhost:3030/flower/${id}`);
      setData(getById.data());
    }
    fetchData();
  }, []);

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div className="detail">
      <div className="container">
        <div className="row">
          {data &&
            ((item) => {
              return (
                <div className="col-xl-3 col-12">
                  <div className="card" key={item._id}>
                    <img src={item.image} alt="" />
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Detail;
