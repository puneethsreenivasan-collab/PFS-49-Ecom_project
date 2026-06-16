import React, { useEffect, useState } from "react";
import "../style/mens.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Mens = () => {
  const [mensdata, setMensdata] = useState(["hhh"]);

  const URL = "http://localhost:3001/men";

  const getdata = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setMensdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className="mens">
      {mensdata.map((item) => {
        return (
          <div key={item.id} className="MENS-card">
            <Link to={"/MensPro"}>
              <img src={item.img} alt="" height="100%" width="100%" />
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Mens;
