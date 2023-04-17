import { format } from "date-fns";
import React from "react";
import img3 from "../Assets/img3.jpg";

const HomeImage = () => {
  let today = format(new Date(), "MM/dd/yyyy");
  return (
    <div>
      <div>{today}</div>
      <img className="imgclass" src={img3} alt="homeimage" />
    </div>
  );
};

export default HomeImage;
