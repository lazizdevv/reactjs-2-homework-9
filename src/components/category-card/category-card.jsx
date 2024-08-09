import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { useDeleteCategory } from "../../pages/category-list/service/mutation/useDeleteCategory";
import { toast } from "react-toastify";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();

  const { mutate } = useDeleteCategory(id);
  const deleteCategory = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("category muvaffaqiyatli o'chirildi!");
      },
    });
  };
  return (
    <div className="flex items-center justify-between gap-5 flex-wrap p-3 border-2 shadow-lg rounded-lg">
      <div className="flex items-center gap-5">
        <img
          className="w-[100px] border-2 border-dashed"
          src={img}
          alt="img"
        />
        <h2 className="text-center font-bold text-lg">{name}</h2>
      </div>

      <div className="flex items-center gap-5">
        <Button
          children={"Show Product"}
          onClick={() => navigate(`/category-product/${id}`)}
        />

        <Button
          onClick={() => navigate(`/edit-category/${id}`)}
          children={"Edit"}
          variant="warning"
        />

        <Button onClick={deleteCategory} children={"Delete"} variant="danger" />
      </div>
    </div>
  );
};
