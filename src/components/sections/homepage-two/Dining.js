import React from "react";
import DiningGrid from "../dining/dining-grid";
import { useState } from "react";
import { useEffect } from "react";
import API from "../../../langapi/http";
function Dining(props) {
  //  dining Data

  const [diningData, setDiningData] = useState([]);

  const getDiningData = () => {
    API.get(`/get_dinings?lang=${props.activeLang}`)
      .then((response) => {
        const allData = response.data?.data;
        setDiningData(allData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDiningData();
  }, [props.activeLang]);

  return (
    <div>
      <DiningGrid title={null} data={diningData} imgHead={true} />
    </div>
  );
}

export default Dining;
