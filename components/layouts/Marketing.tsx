import React, { PropsWithChildren } from "react";
import Navbar from "../navbars/Marketing";
const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default MarketingLayout;
