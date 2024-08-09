import React from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { useDeleteProduct } from "../../service/mutation/useDeleteProduct";

export const ProductCard = ({ id, name, img, price, categoryId }) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteProduct(id);

  const deleteProduct = () => {
    mutate(id, {
      onSuccess: () => {
        console.log("product deleted!");
      },
    });
  };
  return (
    <>
      <div className="flex items-center justify-between p-6 shadow-lg rounded-lg border-2 relative">
        <div className="flex gap-5">
          <img
            className="w-[250px] h-fit border-2 border-dashed"
            src={img}
            alt="img"
          />
          <div className="">
            <h2>{name}</h2>
            <strong>{price}</strong>
          </div>
        </div>
        <div className="flex items-center gap-5 absolute right-5 bottom-5">
          <Button
            onClick={deleteProduct}
            children={"Delete"}
            variant="danger"
          />
          <Button
            onClick={() => navigate(`/edit-product/${id}`)}
            children={"Edit"}
            variant="warning"
          />
        </div>
      </div>
    </>
  );
};
