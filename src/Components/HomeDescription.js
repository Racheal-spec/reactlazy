import React from "react";
import "../Pages/Home/Home.css";

const HomeDescription = ({ handleClick }) => {
  return (
    <div className="flex">
      <h1>Tomi's Recipe App</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae{" "}
      </p>
      <button className="recipe-btn" onClick={handleClick}>
        Check Recipes
      </button>
    </div>
  );
};

export default HomeDescription;
