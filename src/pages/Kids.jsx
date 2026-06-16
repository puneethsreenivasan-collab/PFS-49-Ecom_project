import React, { useEffect, useState } from "react";
import "../style/kids.css";
import axios from "axios";

const Kids = () => {
 const [kidsdata, setKidsdata] = useState(["hhh"]);

  const URL = "http://localhost:3001/kids";

  const getdata = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setKidsdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className="kids">
      {kidsdata.map((item) => {
        return (
          <div key={item.id} className="KIDS-card">
            <img src={item.img} alt="" height="100%" width="100%" />
          </div>
        );
      })}
    </section>
  );
};



export default Kids;
