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
        <div className="flex lg:flex-col justify-center gap-5 font-bold text-white">
          <Link to={"/"}>Home</Link>
          <Link to={"/category-list"}>Category list</Link>
          <Link to={"/create-product"}>Create Product</Link>
        </div>
      </div>
      <div className="w-full flex-grow-1 p-7">
        <Outlet />
      </div>
    </div>
  );
};
