import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../../config/storage";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:h-screen bg-blue-500 p-[20px] w-full lg:w-[300px]">
        <div className="flex lg:flex-col justify-center gap-2 lg:gap-5 font-bold text-white text-sm ">
          <Link className="p-2 border rounded-lg hover:bg-blue-700" to={"/"}>Home</Link>
          <Link className="p-2 border rounded-lg hover:bg-blue-700" to={"/category-list"}>Category list</Link>
          <Link className="p-2 border rounded-lg hover:bg-blue-700" to={"/create-category"}>Create Category</Link>
          <Link className="p-2 border rounded-lg hover:bg-blue-700" to={"/create-product"}>Create Product</Link>
        </div>
      </div>
      <div className="w-full flex-grow-1 p-7">
        <Outlet />
      </div>
    </div>
  );
};
