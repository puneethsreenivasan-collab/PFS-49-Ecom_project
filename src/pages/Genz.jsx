import React, { useEffect, useState } from "react";
import "../style/genz.css";
import axios from "axios";

const Genz = () => {
  const [genzdata, setGenzdata] = useState(["hhh"]);

  const URL = "http://localhost:3001/genz";

  const getdata = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setGenzdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className="genz">
      {genzdata.map((item) => {
        return (
          <div key={item.id} className="GENZ-card">
            <img src={item.img} alt="" height="100%" width="100%"  />
          </div>
        );
      })}
    </section>
  );
};

export default Genz;
