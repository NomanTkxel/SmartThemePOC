import React, { PropsWithChildren } from "react";
import AdminNavbar from "../navbars/AdminNavbar";
const AdminLayout = (props: PropsWithChildren) => {
  return (
    <>
      <AdminNavbar />
      {props.children}
    </>
  );
};
export default AdminLayout;
