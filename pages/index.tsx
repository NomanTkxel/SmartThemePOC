import React from "react";
import { MyPage } from "components/types";

const HomePage: MyPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-1">Hello World</h1>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
HomePage.Layout = "Main";
