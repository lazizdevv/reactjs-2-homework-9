import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between flex-wrap p-6 border-2 shadow-lg rounded-lg">
      <div className="">
        <img className="w-[200px] border-2 border-dashed mb-2" src={img} alt="img" />
        <h2 className="text-center font-bold text-lg">{name}</h2>
      </div>
      <div className="flex items-center gap-5">
        <Button
          children={"Show Product"}
          onClick={() => navigate(`/category-product/${id}`)}
        />

        <Button children={"Delete"} variant="danger" />
        <Button children={"Edit"} variant="warning" />
      </div>
    </div>
  );
};
