import React, { Suspense, useEffect, useState } from "react";
import "./Home.css";
import { lazyWithPreload } from "react-lazy-with-preload";
const HomeDescription = React.lazy(() =>
  import("../../Components/HomeDescription")
);

const HomeImage = lazyWithPreload(() => import("../../Components/HomeImage"));

const Home = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    HomeImage.preload();
  }, []);
  return (
    <div className="flex">
      <Suspense>
        <HomeDescription handleClick={handleClick} click={click} />
        {click ? <HomeImage /> : ""}
      </Suspense>
    </div>
  );
};

export default Home;
