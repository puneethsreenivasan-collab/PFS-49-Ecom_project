import React, { useEffect, useState } from "react";
import "../style/beauty.css";
import axios from "axios";

const Beauty = () => {
  const [beautydata, setBeautydata] = useState(["hhh"]);

  const URL = "http://localhost:3001/beauty";

  const getdata = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setBeautydata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className="beauty">
      {beautydata.map((item) => {
        return (
          <div key={item.id} className="BEAUTY-card">
            <img src={item.img} alt="" height="100%" width="100%"  />
          </div>
        );
      })}
    </section>
  );
};

export default Beauty;
