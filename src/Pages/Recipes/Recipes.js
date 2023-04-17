import React from "react";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import "./Recipes.css";

const Recipes = () => {
  return (
    <section className="recipewrapper">
      <div className="recipeheading">
        <h1>Recipes</h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <img src={img1} className="imgclass" alt="img 1" />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae{" "}
          </p>
        </div>
        <div className="card">
          <img src={img2} className="imgclass" alt="img 1" />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae{" "}
          </p>
        </div>
        <div className="card">
          <img src={img3} className="imgclass" alt="img 1" />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
